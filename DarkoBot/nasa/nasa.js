const { MessageEmbed } = require('discord.js');
const schedule = require('node-schedule');

const { prefix } = require('../botconfig.json');
const { DailyImage, RandomDayImage } = require('./NasaAPI');

// Auto Daily Images Variables
let DailyInitialized = false;
let DailyAttemps = 0;
let DailyJob;

exports.addEvents = (bot) => {

    bot.on('message', async (message) => {

        const msg = message.content;
        const menciones = message.mentions.users;
        const [_prefix = '', command = '', ...params] = msg.split(' ');
        const txtparams = params.toString().replace(',', '');

        if (_prefix !== prefix) return;
        if (command !== 'nasa') return;

        let res;
        if (params[0] === 'daily') {
            res = new MessageEmbed();

            let data;
            if (params[1] === 'rd') {
                data = await RandomDayImage();
            } else {
                data = await DailyImage();
            }
            const { title, url, hdurl, explanation, date } = data;

            if (url) {
                res.title = title;
                res.setImage(url);
                res.description = explanation + "\n";
                res.description += `\nImagen HD: ${hdurl}`;
            }
            else {
                res.title = 'No hay imagen del dia hoy';
                res.description = 'Ejecuta el comando: nasa daily rd';
                res.setImage('https://pics.me.me/nasa-is-sad-48156677.png');
                res.setColor('#a83832');
            }

        }

        else if (params[0] === 'auto') {

            res = new MessageEmbed();
            const hora = 19;

            if(params[1] === 'init'){    
                // const { Client } = require('discord.js'); 
                // const bot1 = new Client().channels.res;.
                if (!DailyInitialized) {
                    const channel = await bot.channels.fetch('763634332765388811');
    
                    if (channel) {
    
                        const sendDaily = async () => {
                            let data = await DailyImage();
                            const dailymsg = new MessageEmbed();
    
                            const { title, url, hdurl, explanation, date } = data;
    
                            if (url) {
                                dailymsg.title = title;
                                dailymsg.setImage(url);
                                dailymsg.description = explanation + "\n";
                                dailymsg.description += `\nImagen HD: ${hdurl}`;
    
                                message.channel.send(dailymsg || 'Comando invalido o no hay contenido');
    
                            }
                            else {
                                if (DailyAttemps < (24-hora)) {
                                    setTimeout(sendDaily(), 3600000);
                                    DailyAttemps++;
                                }
                            }
                        }
    
                        const rule = new schedule.RecurrenceRule();
                        rule.hour = hora;
    
                        DailyJob = schedule.scheduleJob(rule, () => {
                            sendDaily();
                            DailyAttemps = 0;
                        });
                    }
    
                    DailyInitialized = true;
                    res.title = "Imagen del dia de la NASA";
                    res.description = "Se ha configurado correctamente\n";
                    res.description += 'Se enviara una imagen cada dia a las 8pm';
                    res.setColor('#3ad692');   
                }
                else {
                    res.title = "Imagen del dia de la NASA";
                    res.description = "ERROR: Ya ha sido configurado\n";
                    res.description += 'Pruebe cancelar el proceso con el comando: nasa auto cancel';
                    res.setColor('#a83832');
                }

            }
            else if(params[1] === 'cancel'){
                if(DailyJob){
                    DailyJob.cancel();
                    DailyInitialized = false;

                    res.title = "Imagen del dia de la NASA";
                    res.description = "Se han cancelado las imagenes diarias\n";
                    res.description += 'Para volverlo a incializar ejecute: nasa auto init';
                    res.setColor('#3ad692');                    
                }
                else{
                    res.title = "Imagen del dia de la NASA";
                    res.description = "ERROR: El proceso no se ha configurado\n";
                    res.description += 'Para volverlo a incializar ejecute: nasa auto init';
                    res.setColor('#a83832');
                }
            }

        }



        message.channel.send(res || 'Comando invalido o no hay contenido');
    });

}

