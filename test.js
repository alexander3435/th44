const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-"// البرفكس هنا

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  client.on('message', message => {
    if (message.content.startsWith('^Active')) {
       if(!message.channel.guild) return;
    message.member.addRole(message.guild.roles.find("name", "●<[Members]>●"));
   
   }
   });
  
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === '^Active') {
      msg.reply('تم تفعيلك');
    }
  });
  
  
  
  
  
  client.on('message', function(message) {
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
              let command = message.content.split(" ")[0];
          if(message.content.includes('discord.gg')){
          message.reply (' ')
             if(!message.channel.guild) return message.reply('** This command only for servers**');
       message.member.addRole(message.guild.roles.find('name', 'Muted')); 
      const embed500 = new Discord.RichEmbed()
        .setTitle(":x: | تمت معاقبتك")
              .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
        .addField(`by`,`.Alexander#2929 iGameRi_YT#4156`)
              .setColor("c91616")
              .setThumbnail(`${message.author.avatarURL}`)
              .setAuthor(message.author.username, message.author.avatarURL) 
          .setFooter(`${message.guild.name} Server`)
       message.channel.send(embed500) 
      
          
      }
      }
  })
  
  
  
  client.on('message', message => {
      if(message.channel.type === 'dm') {
          var guildID = '503509160793604096'; // <=============== ايدي السيرفر حقك
          if(message.content.includes('discord.gg/')) {
              var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
              member.ban({ reason: 'ADS In Private.' }).catch();
          }
      }
  });
  
  
  
  
  
  
  
  
  
  
  client.on("message", message => {
    if(message.content.startsWith("/verify")) { // الامر والبريفكس
      let num = Math.floor((Math.random() * 4783) + 10);
  
      message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
        message.channel.awaitMessages(res => res.content == `${num}`, {
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => {
          message.delete();
          m.delete();
          message.member.addRole(message.guild.roles.find(c => c.name == "●<[Members]>●")); // اسم الرتبة
        }).catch(() => {
          m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
        });
      });
    }
  });
  
  
      client.on('message', async message => {
    if(message.content.startsWith(prefix + "طلب")) {
      await message.channel.send("**ماذا تريد:small_orange_diamond:**").then(e => {
      let filter = m => m.author.id === message.author.id
      let lan = '';
      let md = '';
      let br = '';
      let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
      .then(collected => {
        lan = collected.first().content
        collected.first().delete()
  e.delete();
       message.channel.send('**كم تدفع :small_blue_diamond:**').then(m => {
  let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
  .then(co => {
    md = co.first().content
          co.first().delete()
          m.delete();
  message.channel.send('**من الذي تشتري منه:shopping_cart:**').then(ms => {
  let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
  .then(col => {
    br = col.first().content
          col.first().delete()
  
  ms.delete()
  
   message.channel.send('** انتظر..**').then(b => {
          setTimeout(() => {
    b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت:white_check_mark:**`)
          },2000);
  var gg = message.guild.channels.find('name','the-haven')
  if(!gg) return;
  if(gg) {
  gg.send({embed : new Discord.RichEmbed()
  .setDescription(`**ماذا تريد:scroll: » \n ${lan}\nكم تدفع :moneybag: » \n ${md} \n من الذي تشتري منه :round_pushpin: » \n ${br}  \n تم التقديم بوسطة :top: » <@${message.author.id}> **`)  
            .setFooter(`Rqmi,System Team♥`)
  .setTimestamp()
  });
  }        
  })
  })
  })
  })
  })
  })
  })
   }
  })
  
  
  
  
  
  
  
   client.on('message', ra3d => {
                          let args = ra3d.content.split(" ").slice(1).join(" ")
  if(ra3d.content.startsWith(prefix + 'cc')) {
      if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
               if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
                ra3d.channel.send(`**✅ |تم انشاء __${args}__ لون**`);
                    setInterval(function(){})
                      let count = 0;
                      let ecount = 0;
            for(let x = 1; x < `${parseInt(args)+1}`; x++){
              ra3d.guild.createRole({name:x,
                color: 'RANDOM'})
                }
              }
         });
  
  const moment = require("moment")
  client.on("guildMemberAdd", m => {
      if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
          m.ban();
      };
      function parseDate(str) {
          var mdy = str.split('/');
          return new Date(mdy[2], mdy[0]-1, mdy[1]);
      };
      
      function datediff(first, second) {
          return Math.round((second-first)/(1000*60*60*24));
      };
  });
  
  
  
  
  client.on("message",  message => {
      let args = message.content.split(' ').slice(1);
  if(message.content.startsWith(prefix + 'nic')) {
     if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
         message.channel.send("ضع الاسم")
     } else {
         if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
         let changenick = message.mentions.users.first();
         let username = args.slice(1).join(' ')
         if (username.length < 1) return message.reply('ضع الاسم').catch(console.error);
         if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
         message.guild.member(changenick.id).setNickname(username);
         message.channel.send("تم تغيير الاسم الى: " + changenick + "")
     }
  }});
  
  
  client.on('guildMemberAdd', member => {
  const mohamed= member.guild.channels.get("503509160793604096");
  if(!mohamed) return;
  if(mohamed) {
  setTimeout(() => mohamed.send(`Welcome To TH Server 💖`), 4000)        
  }
  });
  
  
  
  
  const RichEmbed = require("discord.js");
  const { Client, Util } = require('discord.js');
  
  const devs = ["507700225201274913"]
  
  const adminprefix = "$";
  client.on('message', message => {
      var argresult = message.content.split(` `).slice(1).join(' ');
        if (!devs.includes(message.author.id)) return;
        
    if (message.content.startsWith(adminprefix + 'ply')) {
      client.user.setGame(argresult);
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else 
      if (message.content === (adminprefix + "Percie")) {
      message.guild.leave();        
    } else  
    if (message.content.startsWith(adminprefix + 'wt')) {
    client.user.setActivity(argresult, {type:'WATCHING'});
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else 
    if (message.content.startsWith(adminprefix + 'ls')) {
    client.user.setActivity(argresult , {type:'LISTENING'});
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else     
      if (message.content.startsWith(adminprefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}** : Done :>`)
    return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
    } else
      if (message.content.startsWith(adminprefix + 'setavatar')) {
    client.user.setAvatar(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
          } else     
    if (message.content.startsWith(adminprefix + 'st')) {
      client.user.setGame(argresult, "https://www.twitch.tv/mohamedgamal");
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    }
      if(message.content === adminprefix + "restart") {
        if (!devs.includes(message.author.id)) return;
            message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
          console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
          console.log(`⚠️ Bot restarting... ⚠️`);
          console.log("===============================================\n\n");
          client.destroy();
          client.on.fork(__dirname + "/test.js");
          console.log(`Bot Successfully Restarted`);
      }
    
    });
  
  
  client.on('message', message => {
         if (message.content.startsWith(prefix + 'users1')) {
       let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
    let embed = new Discord.RichEmbed()
    .setTitle(`${client.guilds.size}سيرفرات `)
    .setDescription(`${msg}`)
    .setColor("#00ff47");
    message.channel.send(embed);
  }
  });
  
  
  
  
  
  
  client.on('message', message => {
               if (!message.channel.guild) return;
       if(message.content =='^count')
  
       message.reply(`**${message.guild.memberCount}**`);
     });
     client.on('message', message => {
    if(message.content.startsWith(prefix + "invites")) {
     message.guild.fetchInvites().then(invs => {
       let user = message.mentions.users.first() || message.author
       let personalInvites = invs.filter(i => i.inviter.id === user.id);
       let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
  message.channel.send(`${user} has ${inviteCount} invites.`);
  });
   }
  });
  
  
  
  
  client.on('message', message => {
                   if(message.content === "^mc") {
                                       if(!message.channel.guild) return message.reply("**This command only for servers**");
  
               if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                          message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
  
                          }).then(() => {
                              message.reply("**__تم قفل الشات__ ✅ **")
                          });
                            }
  
                if(message.content === "^unmc") {
                                    if(!message.channel.guild) return message.reply("**This command only for servers**");
  
               if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                          message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: true
  
                          }).then(() => {
                              message.reply("**__تم فتح الشات__✅**")
                          });
                }
  
            });
  
  
  client.on("message", message => {
   
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "مسح")) {
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "Done | تــم",
          color: 0x06DF00,
          description: "تم مسح الرسائل بنجاح",
          footer: {
            text: "! The Haven.bot" // غير هنا حط اسم البوت
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });
  
  
  client.on('message', message => {
              if (message.content.startsWith("^rules")) {
       let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .addField('     اولا ' ,' ممنوع السب ')
  .addField('     ثانيا ' ,' لا تسوي سبام  ')
  .addField('     ثالثا ' ,' لا تزعج الاخرين ')
  .addField('    رابعا' ,' ممنوع الاعلانات ')
  .addField('    خامسا' ,' احترم الاخرين ')
  .addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')//Codes Server
  .addField('    سابعا' ,' لا تنشر روابط ')
  .addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
  .addField('    تاسعا' ,' لا تطلب رتبه الاداره ')
  .setColor('#7d2dbe')
    message.channel.sendEmbed(embed);//Codes Server
      }
  });
  
  
  
  client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })
  
   
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log('')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged in as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });
   
  const ytdl = require("ytdl-core");
  const getYoutubeID = require('get-youtube-id');
  const fetchVideoInfo = require('youtube-info');
  const YouTube = require('simple-youtube-api');
  const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
  const queue = new Map();
   
  var servers = [];
  var guilds = [];
  var queueNames = [];
  var isPlaying = false;
  var dispatcher = null;
  var voiceChannel = null;
  var skipReq = 0;
  var skippers = [];
  var now_playing = []; 
   
  
  
  
  client.on('message', msg => {
  
      if (msg.content == '$join') {
          if (msg.member.voiceChannel) {
  
       if (msg.member.voiceChannel.joinable) {
           msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
       }
      }
  }
  })
  client.on('ready', () => { //code bot not leave room voice //Bot Is Online
      client.channels.get("516241309351280640").join(); //by : Toxic Codes
      });
  
  
  
  
  
  
  
  
  
  client.on('message', async msg => {
      if (msg.author.bot) return undefined;
     
      if (!msg.content.startsWith(prefix)) return undefined;
      const args = msg.content.split(' ');
      const searchString = args.slice(1).join(' ');
     
      const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
      const serverQueue = queue.get(msg.guild.id);
   
      let command = msg.content.toLowerCase().split(" ")[0];
      command = command.slice(prefix.length)
   
      if (command === `play`) {
          const voiceChannel = msg.member.voiceChannel;
          if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
          const permissions = voiceChannel.permissionsFor(msg.client.user);
          if (!permissions.has('CONNECT')) {
             
              return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
          }
          if (!permissions.has('SPEAK')) {
              return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
          }
   
          if (!permissions.has('EMBED_LINKS')) {
              return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
          }
   
          if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
              const playlist = await youtube.getPlaylist(url);
              const videos = await playlist.getVideos();
             
              for (const video of Object.values(videos)) {
                  const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                  await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
              }
              return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
          } else {
              try {
   
                  var video = await youtube.getVideo(url);
              } catch (error) {
                  try {
                      var videos = await youtube.searchVideos(searchString, 5);
                      let index = 0;
                      const embed1 = new Discord.RichEmbed()
                      .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
  ${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
   
                      .setFooter("By .Alexander#2929")
                      msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                     
                      // eslint-disable-next-line max-depth
                      try {
                          var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                              maxMatches: 1,
                              time: 15000,
                              errors: ['time']
                          });
                      } catch (err) {
                          console.error(err);
                          return msg.channel.send('لم يتم إختيآر مقطع صوتي');
                      }
                      const videoIndex = parseInt(response.first().content);
                      var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                  } catch (err) {
                      console.error(err);
                      return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
                  }
              }
   
              return handleVideo(video, msg, voiceChannel);
          }
      } else if (command === `skip`) {
          if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
          if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
          serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
          return undefined;
      } else if (command === `leave`) {
          if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
          if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
          serverQueue.songs = [];
          serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
          return undefined;
      } else if (command === `vol`) {
          if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
          if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
          if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
          serverQueue.volume = args[1];
          serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
          return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
      } else if (command === `np`) {
          if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
          const embedNP = new Discord.RichEmbed()
      .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
          return msg.channel.sendEmbed(embedNP);
      } else if (command === `queue`) {
         
         
          if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
          let index = 0;
         
          const embedqu = new Discord.RichEmbed()
   
  .setDescription(`**Songs Queue**
  ${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
  **الان يتم تشغيل** ${serverQueue.songs[0].title}`)
          return msg.channel.sendEmbed(embedqu);
      } else if (command === `stop`) {
          if (serverQueue && serverQueue.playing) {
              serverQueue.playing = false;
              serverQueue.connection.dispatcher.pause();
              return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
          }
          return msg.channel.send('لا يوجد شيء حالي ف العمل.');
      } else if (command === "resume") {
          if (serverQueue && !serverQueue.playing) {
              serverQueue.playing = true;
              serverQueue.connection.dispatcher.resume();
              return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
          }
          return msg.channel.send('لا يوجد شيء حالي في العمل.');
      }
   
      return undefined;
  });
   
  async function handleVideo(video, msg, voiceChannel, playlist = false) {
      const serverQueue = queue.get(msg.guild.id);
      console.log(video);
     
  
      const song = {
          id: video.id,
          title: Util.escapeMarkdown(video.title),
          url: `https://www.youtube.com/watch?v=${video.id}`
      };
      if (!serverQueue) {
          const queueConstruct = {
              textChannel: msg.channel,
              voiceChannel: voiceChannel,
              connection: null,
              songs: [],
              volume: 5,
              playing: true
          };
          queue.set(msg.guild.id, queueConstruct);
   
          queueConstruct.songs.push(song);
   
          try {
              var connection = await voiceChannel.join();
              queueConstruct.connection = connection;
              play(msg.guild, queueConstruct.songs[0]);
          } catch (error) {
              console.error(`I could not join the voice channel: ${error}`);
              queue.delete(msg.guild.id);
              return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
          }
      } else {
          serverQueue.songs.push(song);
          console.log(serverQueue.songs);
          if (playlist) return undefined;
          else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
      }
      return undefined;
  }
   
  function play(guild, song) {
      const serverQueue = queue.get(guild.id);
   
      if (!song) {
          serverQueue.voiceChannel.leave();
          queue.delete(guild.id);
          return;
      }
      console.log(serverQueue.songs);
   
      const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
          .on('end', reason => {
              if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
              else console.log(reason);
              serverQueue.songs.shift();
              play(guild, serverQueue.songs[0]);
          })
          .on('error', error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
   
      serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
  }
   
  
  client.on("message", message => {
      if (message.content === `${prefix}help`) {
    const embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setDescription(`
  ${prefix}play ⇏ لتشغيل أغنية برآبط أو بأسم
  ${prefix}skip ⇏ لتجآوز الأغنية الحآلية
  ${prefix}stop ⇏ إيقآف الأغنية مؤقتا
  ${prefix}resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
  ${prefix}vol ⇏ لتغيير درجة الصوت 100 - 0
  ${prefix}leave⇏ لإخرآج البوت من الروم
  ${prefix}np ⇏ لمعرفة الأغنية المشغلة حآليا
  ${prefix}queue ⇏ لمعرفة قآئمة التشغيل
   `)
     message.channel.sendEmbed(embed)
     
     }
     });
   
  
  
  
  client.on('message', message => {
  if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'موف')) {
   if (message.member.hasPermission("MOVE_MEMBERS")) {
   if (message.mentions.users.size === 0) {
   return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
  }
  if (message.member.voiceChannel != null) {
   if (message.mentions.members.first().voiceChannel != null) {
   var authorchannel = message.member.voiceChannelID;
   var usermentioned = message.mentions.members.first().id;
  var embed = new Discord.RichEmbed()
   .setTitle("Succes!")
   .setColor("#000000")
   .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
  var embed = new Discord.RichEmbed()
  .setTitle(`You are Moved in ${message.guild.name}`)
   .setColor("RANDOM")
  .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
   message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
  message.guild.members.get(usermentioned).send(embed)
  } else {
  message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
  }
  } else {
   message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
  }
  } else {
  message.react("❌")
   }}});
  
  
  
  
  
  
  
  client.on('guildMemberAdd', member=> {
      member.addRole(member.guild.roles.find("name","●<[Members]>●"));
      });
  
  
  
  
  
  client.on('message', message => {    
      var p = "^";
              if (message.content.startsWith(p + "cto")) {
                  if(!message.channel.guild) return;
                  if (!message.member.hasPermission("MANAGE_CHANNEL"))  return;
        var a= message.content.split(' ').slice(1).join("  ");
        if (!a) return message.reply("اكتب كلام لوضعه في التوبيك!")
        message.channel.setTopic(`${a}`)
        .then(newChannel => message.channel.send(`تم تغيير التوبيك لـ **${a}**`))
        .catch(console.error);
              }
          });
  
  
  
  
  
  
  client.on('message', message => {
      if (message.content.startsWith(prefix + "avatar")) {
          var mentionned = message.mentions.users.first();
      var x5bzm;
        if(mentionned){
            var x5bzm = mentionned;
        } else {
            var x5bzm = message.author;
            
        }
          const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setImage(`${x5bzm.avatarURL}`)
        message.channel.sendEmbed(embed);
      }
  });
  
  
  
  
  
  
  
  
  client.on('guildMemberAdd', member => {
      let channel = member.guild.channels.find('name', 'the-haven');
      let memberavatar = member.user.avatarURL
        if (!channel) return; 
      let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(memberavatar)
          .addField('🎽 | name :  ',`${member}`)
          .addField('📢 | نورت السيرفر ي قلبي' , `Welcome To TH Server, ${member}`)
          .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                  .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                 
                    .addField("Name:",`<@` + `${member.id}` + `>`, true)
                        
                                       .addField(' الـسيرفر', `${member.guild.name}`,true)
                                         
       .setFooter("**Family team **")
          .setTimestamp()
      
        channel.sendEmbed(embed);
      });
  
  
  
  client.on('message', message => {
    if (message.content.startsWith('هلا بيك')) {
      const voiceChannel = message.member.voiceChannel;
      voiceChannel.join()
        .then(connnection => {
          const stream = ytdl("https://ytcropper.com/cropped/rB5c057f5ca4911", { filter: 'audioonly' });
          const dispatcher = connnection.playStream(stream);
                  dispatcher.on('end', () => voiceChannel.leave());
  
        });///////////MaL Team 
    }
  })//////////////////////////Mal Team
  
  
  



client.on('message', message => {
  if (message.content.startsWith('^Active')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "●<[Members]>●"));
 
 }
 });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  if (msg.content === '^Active') {
    msg.reply('تم تفعيلك');
  }
});





client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
      .addField(`by`,`.Alexander#2929 iGameRi_YT#4156`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})



client.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '503509160793604096'; // <=============== ايدي السيرفر حقك
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});










client.on("message", message => {
  if(message.content.startsWith("/verify")) { // الامر والبريفكس
    let num = Math.floor((Math.random() * 4783) + 10);

    message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "●<[Members]>●")); // اسم الرتبة
      }).catch(() => {
        m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
      });
    });
  }
});


	client.on('message', async message => {
  if(message.content.startsWith(prefix + "طلب")) {
    await message.channel.send("**ماذا تريد:small_orange_diamond:**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**كم تدفع :small_blue_diamond:**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**من الذي تشتري منه:shopping_cart:**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('** انتظر..**').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت:white_check_mark:**`)
        },2000);
var gg = message.guild.channels.find('name','the-haven')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**ماذا تريد:scroll: » \n ${lan}\nكم تدفع :moneybag: » \n ${md} \n من الذي تشتري منه :round_pushpin: » \n ${br}  \n تم التقديم بوسطة :top: » <@${message.author.id}> **`)  
          .setFooter(`Rqmi,System Team♥`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})







 client.on('message', ra3d => {
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'cc')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |تم انشاء __${args}__ لون**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

const moment = require("moment")
client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban();
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
    
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});




client.on("message",  message => {
    let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'nic')) {
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
       message.channel.send("ضع الاسم")
   } else {
       if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
       let changenick = message.mentions.users.first();
       let username = args.slice(1).join(' ')
       if (username.length < 1) return message.reply('ضع الاسم').catch(console.error);
       if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
       message.guild.member(changenick.id).setNickname(username);
       message.channel.send("تم تغيير الاسم الى: " + changenick + "")
   }
}});


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("503509160793604096");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome To TH Server 💖`), 4000)        
}
});




const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');

const devs = ["507700225201274913"]

const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/mohamedgamal");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        client.on.fork(__dirname + "/test.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });


client.on('message', message => {
       if (message.content.startsWith(prefix + 'users1')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#00ff47");
  message.channel.send(embed);
}
});






client.on('message', message => {
             if (!message.channel.guild) return;
     if(message.content =='^count')

     message.reply(`**${message.guild.memberCount}**`);
   });
   client.on('message', message => {
  if(message.content.startsWith(prefix + "invites")) {
   message.guild.fetchInvites().then(invs => {
     let user = message.mentions.users.first() || message.author
     let personalInvites = invs.filter(i => i.inviter.id === user.id);
     let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
 }
});




client.on('message', message => {
                 if(message.content === "^mc") {
                                     if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: false

                        }).then(() => {
                            message.reply("**__تم قفل الشات__ ✅ **")
                        });
                          }

              if(message.content === "^unmc") {
                                  if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: true

                        }).then(() => {
                            message.reply("**__تم فتح الشات__✅**")
                        });
              }

          });


client.on("message", message => {
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "! The Haven.bot" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('message', message => {
            if (message.content.startsWith("^rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     اولا ' ,' ممنوع السب ')
.addField('     ثانيا ' ,' لا تسوي سبام  ')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')//Codes Server
.addField('    سابعا' ,' لا تنشر روابط ')
.addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);//Codes Server
    }
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
const ytdl = require("ytdl-core");
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
 
var servers = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = []; 
 



client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("516241309351280640").join(); //by : Toxic Codes
    });









client.on('message', async msg => {
    if (msg.author.bot) return undefined;
   
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
   
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
 
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
 
    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
           
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
        }
 
        if (!permissions.has('EMBED_LINKS')) {
            return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
        }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
           
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
        } else {
            try {
 
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 5);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
 
                    .setFooter("By .Alexander#2929")
                    msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                   
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 15000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('لم يتم إختيآر مقطع صوتي');
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
                }
            }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === `skip`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
        serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
        return undefined;
    } else if (command === `leave`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
        return undefined;
    } else if (command === `vol`) {
        if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
        if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
        if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
    } else if (command === `np`) {
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
    } else if (command === `queue`) {
       
       
        if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
        let index = 0;
       
        const embedqu = new Discord.RichEmbed()
 
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
        return msg.channel.sendEmbed(embedqu);
    } else if (command === `stop`) {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
        }
        return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    } else if (command === "resume") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
        }
        return msg.channel.send('لا يوجد شيء حالي في العمل.');
    }
 
    return undefined;
});
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
   

    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
 
        queueConstruct.songs.push(song);
 
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
    }
    return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}
 

client.on("message", message => {
    if (message.content === `${prefix}help`) {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
${prefix}play ⇏ لتشغيل أغنية برآبط أو بأسم
${prefix}skip ⇏ لتجآوز الأغنية الحآلية
${prefix}stop ⇏ إيقآف الأغنية مؤقتا
${prefix}resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol ⇏ لتغيير درجة الصوت 100 - 0
${prefix}leave⇏ لإخرآج البوت من الروم
${prefix}np ⇏ لمعرفة الأغنية المشغلة حآليا
${prefix}queue ⇏ لمعرفة قآئمة التشغيل
 `)
   message.channel.sendEmbed(embed)
   
   }
   });
 



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'موف')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});







client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","●<[Members]>●"));
    });





client.on('message', message => {    
    var p = "^";
            if (message.content.startsWith(p + "cto")) {
                if(!message.channel.guild) return;
                if (!message.member.hasPermission("MANAGE_CHANNEL"))  return;
      var a= message.content.split(' ').slice(1).join("  ");
      if (!a) return message.reply("اكتب كلام لوضعه في التوبيك!")
      message.channel.setTopic(`${a}`)
      .then(newChannel => message.channel.send(`تم تغيير التوبيك لـ **${a}**`))
      .catch(console.error);
            }
        });






client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});








client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'the-haven');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر ي قلبي' , `Welcome To TH Server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**Family team **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });



client.on('message', message => {
  if (message.content.startsWith('هلا بيك')) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://ytcropper.com/cropped/rB5c057f5ca4911", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());

      });///////////MaL Team 
  }
})//////////////////////////Mal Team





const bannedwords = [
    " كسمك",
    "كسمين امك",
    "الشتيمه",
    "الشتيمه",
    "الشتيمه",
    "الشتيمه"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنج الشتايم تمامنا هنا  ").then(msg => {msg.delete(5000)});;
  };
});






client.on('message', message => {
    if (message.content === 'بوم') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(`ٍٍٍ`)
              .then(m => {
                count++;
              })
              
            }
          }
    });




});///الكود فوق ذي
 
 
 
client.login(process.env.BOT_TOKEN);