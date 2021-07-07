const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "*";
const low = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')
var alea = 1;
var nmbrItemsMax = 51;
var pourcentage = 5;
var loop = 0;

const inv_adapter = new FileSync("inventory.json")
const inv_db = low(inv_adapter);
const item_adapter = new FileSync("items.json")
const item_db = low(item_adapter);
const uno_adapter = new FileSync("uno.json")
const uno_db = low(uno_adapter);

// Extract the required classes from the discord.js module
const { Client, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

bot.login("TOKEN");


bot.on('ready', () => {
  console.log(`Bonjour USERNAME ! Ici ${bot.user.username} pour vous servir !`);
  bot.user.setStatus('idle');
  bot.user.setActivity("faire des tests !                                                          *help si tu es perdu !");
  //bot.user.setUsername("R2-D2");

});

bot.on('message', msg => {

  /*if (msg.author.bot) return;
  console.log(`${msg.author.username} a dit: "${msg.content}".`);*/
  var authorId = msg.author.id;
  var authorName = msg.author.username;
  var nmbrItems = Number(inv_db.get(`${authorId}.nmbrItems`).value());
  if (msg.author.bot)return;


  if (!inv_db.has(authorId).value()){
       inv_db.set( authorId, {name: authorName, nmbrItems: 0}).write()
       inv_db.get("top").push({"Name": authorName, "number": 0})
       console.log(`L'inventaire de ${msg.author.username} à été créé !`)
  }


  /*var args = msg.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {

      case "newstory":
      var value = msg.content.substr(10);
      var number = db.get('histoires').map('id').value();
      console.log(value);
      msg.reply("Ajout de l'histoire à la base de données !")

      db.get('histoires')
          .push({ id: number + 1, story_value: value, story_author: author})
          .write();
      break;
    }*/

  var chance = Math.floor(Math.random() * 1001);
  if (((chance <= pourcentage) && (alea == 1) && (nmbrItems != nmbrItemsMax) && ((msg.channel.id == 543552027859353601) || (msg.channel.id == 543552529053646858) || (msg.channel.id == 543552539908636686) || (msg.channel.id == 543552545075757107) || (msg.channel.id == 543552032108183590))) || (((msg.content.startsWith(prefix + "box")) || (msg.content.startsWith(prefix + "randbox"))) && (authorId == 264168125929488384))) {
    if (msg.content.startsWith(prefix + "box")) {var objet = msg.content.split(" ")[1];}

    do {
      if (alea == 1 || (msg.content.startsWith(prefix + "randbox"))) {var objet = Math.floor(Math.random() * 51);}

      if (objet == 0) {var nItem = "Item000"}
      else if (objet == 1) {var nItem = "Item001"}
      else if (objet == 2) {var nItem = "Item002"}
      else if (objet == 3) {var nItem = "Item003"}
      else if (objet == 4) {var nItem = "Item004"}
      else if (objet == 5) {var nItem = "Item005"}
      else if (objet == 6) {var nItem = "Item006"}
      else if (objet == 7) {var nItem = "Item007"}
      else if (objet == 8) {var nItem = "Item008"}
      else if (objet == 9) {var nItem = "Item009"}
      else if (objet == 10) {var nItem = "Item010"}
      else if (objet == 11) {var nItem = "Item011"}
      else if (objet == 12) {var nItem = "Item012"}
      else if (objet == 13) {var nItem = "Item013"}
      else if (objet == 14) {var nItem = "Item014"}
      else if (objet == 15) {var nItem = "Item015"}
      else if (objet == 16) {var nItem = "Item016"}
      else if (objet == 17) {var nItem = "Item017"}
      else if (objet == 18) {var nItem = "Item018"}
      else if (objet == 19) {var nItem = "Item019"}
      else if (objet == 20) {var nItem = "Item020"}
      else if (objet == 21) {var nItem = "Item021"}
      else if (objet == 22) {var nItem = "Item022"}
      else if (objet == 23) {var nItem = "Item023"}
      else if (objet == 24) {var nItem = "Item024"}
      else if (objet == 25) {var nItem = "Item025"}
      else if (objet == 26) {var nItem = "Item026"}
      else if (objet == 27) {var nItem = "Item027"}
      else if (objet == 28) {var nItem = "Item028"}
      else if (objet == 29) {var nItem = "Item029"}
      else if (objet == 30) {var nItem = "Item030"}
      else if (objet == 31) {var nItem = "Item031"}
      else if (objet == 32) {var nItem = "Item032"}
      else if (objet == 33) {var nItem = "Item033"}
      else if (objet == 34) {var nItem = "Item034"}
      else if (objet == 35) {var nItem = "Item035"}
      else if (objet == 36) {var nItem = "Item036"}
      else if (objet == 37) {var nItem = "Item037"}
      else if (objet == 38) {var nItem = "Item038"}
      else if (objet == 39) {var nItem = "Item039"}
      else if (objet == 40) {var nItem = "Item040"}
      else if (objet == 41) {var nItem = "Item041"}
      else if (objet == 42) {var nItem = "Item042"}
      else if (objet == 43) {var nItem = "Item043"}
      else if (objet == 44) {var nItem = "Item044"}
      else if (objet == 45) {var nItem = "Item045"}
      else if (objet == 46) {var nItem = "Item046"}
      else if (objet == 47) {var nItem = "Item047"}
      else if (objet == 48) {var nItem = "Item048"}
      else if (objet == 49) {var nItem = "Item049"}
      else if (objet == 50) {var nItem = "Item050"}

    } while (inv_db.get(authorId).has(nItem).value());

      var item_titre = item_db.get(`${nItem}`).map('Name').value()
      var item_ref = item_db.get(`${nItem}`).map('Ref').value()
      var item_id = item_db.get(`${nItem}`).map('ID').value()
      var item_img = item_db.get(`${nItem}`).map('img').value()
      var item_footer_text = item_db.get(`${nItem}`).map('footer_text').value()
      var item_footer_img = item_db.get(`${nItem}`).map('footer_img').value()

      var nombrItems = Number(inv_db.get(`${authorId}.nmbrItems`).value())
      inv_db.set(`${authorId}.${nItem}`, 1).write()
      inv_db.get(authorId).set('nmbrItems', nombrItems + 1).write();
      inv_db.get("top").filter({Name: authorName}).find({ number: nombrItems }).assign({ number: nombrItems + 1}).write()

      const embed = new RichEmbed()
      .setTitle(`Vous venez de trouver une GeekBox !!`)
      .setColor(0xEAB328)
      .setThumbnail('https://zupimages.net/up/18/01/l79b.png')
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setFooter(item_footer_text, `${item_footer_img}`)
      .setDescription(`A l'interieur se trouve la relique ${item_id} :\n**${item_titre}** dans __${item_ref}__ !!\n`)
      .setImage(`${item_img}`)
      msg.channel.send(embed);
      console.log(`${msg.author.username} a trouvé la GeekBox ${item_id} !`);
  }

  else if (msg.content.startsWith(prefix + "rezero")) {
    msg.channel.send({files: ["./Images/episode_final.png"]})
}


  /*let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

    if (msg.content.startsWith(prefix + "nick")) {
         let args = msg.content.split(" ").slice(1);
         msg.author.setNickname(`${args.join(" ")}`);
       }

    else if(msg.content.startsWith(prefix + "say")) {
      let args = msg.content.split(" ").slice(1);
      msg.channel.sendMessage(`${args.join(" ")}`);
      msg.delete();
    }*/
    
    else if (msg.author.id == 260908777446965248 || msg.content.startsWith(prefix + "barthotest")) {
      msg.channel.sendMessage(`<@260908777446965248>`);
      msg.channel.sendMessage(`https://thumbs.gfycat.com/OpenSizzlingIndianjackal-small.gif`);
      console.log(`${msg.author.username} s'est fait bamboozled !`);
    }

    else if (msg.content.startsWith(prefix + "help")) {
      //msg.channel.startTyping();

      if ((msg.channel.id == 543552529053646858) || (msg.channel.id == 543552539908636686) || (msg.channel.id == 543552545075757107)){
        const embed = new RichEmbed()
        // Set the title of the field
        .setTitle('Vous vous êtes perdu dans la Cave ?')
        // Set the color of the embed
        .setColor(0xEAB328)
        .setFooter(`Aide demandée par ${msg.author.username}`, msg.author.avatarURL)
        // Set the main content of the embed
        .setThumbnail(`https://zupimages.net/up/18/01/uk0z.png`)

        .setDescription(`----------------------------------------------------------------------------------\n
        **__Le channel__** <#543552520123842570>\nCe salon est là pour vous présenter la Cave. Aussi inutile qu'un pallier.\n
        **__Le channel__** <#543552525454802968>\nVoyez ce channel comme un grand tableau de liège où vous pouvez y placer des messages pour les autres membres de la Cave\n(Des propositions, rappels, etc)\n
        **__Le channel__** <#543552535282057216>\nUn planning et des liens pour visionner des films et animés en vocal !\n
        **__Le channel__** <#543552539908636686>\nContrôlez ici le bot radio de la Cave ! Checkez les épinglés !\n
        **__Le channel__** <#543552529053646858>\nL'endroit de toutes les discussions. Posez vous et profitez, c'est moi qui fait le café !\n
        **__Le channel__** <#543552545075757107>\nDans ce channel, tous les bots sont permis (Y compris le NSFW) ! Si vous voulez un bot en particulier, proposez-le sur le panneau !\n
        ----------------------------------------------------------------------------------\n
        Pour une aide plus générale, merci de refaire la commande en dehors de la Cave (ex : <#543552032108183590>)\n
        ----------------------------------------------------------------------------------\n`);
      // Send the embed to the same channel as the message
        msg.channel.send(embed);
        console.log(`${msg.author.username} a demandé de l'aide dans la Cave !`);
      }
      else {
        const embed = new RichEmbed()
        // Set the title of the field
        .setTitle(`Bonjour ${authorName}, que puis-je faire pour vous ?`)
        // Set the color of the embed
        .setColor(0xEAB328)
        .setFooter(`Aide demandée par ${authorName}`, msg.author.avatarURL)
        // Set the main content of the embed
        .setThumbnail(`https://zupimages.net/up/19/01/3h0b.png`)

        .setDescription(`Je suis GLaDOS, un bot Discord codé par <@264168125929488384> ! Si vous écrivez dans le salon <#543552027859353601> ou dans la Cave,
          vous pouvez trouver une *__GeekBox__*.\nCes *__GeekBox__* renferment des reliques assez spéciales, à vous d'être actif et de toutes les découvrir !\n`)
        .addField('Commandes :', `*help\n*collection\n*infoitem <N° de la relique>\n`, true)
        .addField('Description :', `Fait apparaitre cette aide\nVoir votre collection de relique\nVoir les informations d'une relique\n`, true)
      // Send the embed to the same channel as the message
        msg.channel.send(embed);
        console.log(`${msg.author.username} a demandé de l'aide !`);
      }
    //  msg.channel.stopTyping(true);
    }

    else if (msg.content.startsWith(prefix + "collection")) {
      var nmbrItems = Number(inv_db.get(`${authorId}.nmbrItems`).value());
      var pNmbrItems = parseInt((nmbrItems*100)/nmbrItemsMax)
      var description = "[VIDE]";

      for (var pas = nmbrItemsMax; pas >= 0 ; pas--){
        if (pas == 0) {var nItem = "Item000"}
        else if (pas == 1) {var nItem = "Item001"}
        else if (pas == 2) {var nItem = "Item002"}
        else if (pas == 3) {var nItem = "Item003"}
        else if (pas == 4) {var nItem = "Item004"}
        else if (pas == 5) {var nItem = "Item005"}
        else if (pas == 6) {var nItem = "Item006"}
        else if (pas == 7) {var nItem = "Item007"}
        else if (pas == 8) {var nItem = "Item008"}
        else if (pas == 9) {var nItem = "Item009"}
        else if (pas == 10) {var nItem = "Item010"}
        else if (pas == 11) {var nItem = "Item011"}
        else if (pas == 12) {var nItem = "Item012"}
        else if (pas == 13) {var nItem = "Item013"}
        else if (pas == 14) {var nItem = "Item014"}
        else if (pas == 15) {var nItem = "Item015"}
        else if (pas == 16) {var nItem = "Item016"}
        else if (pas == 17) {var nItem = "Item017"}
        else if (pas == 18) {var nItem = "Item018"}
        else if (pas == 19) {var nItem = "Item019"}
        else if (pas == 20) {var nItem = "Item020"}
        else if (pas == 21) {var nItem = "Item021"}
        else if (pas == 22) {var nItem = "Item022"}
        else if (pas == 23) {var nItem = "Item023"}
        else if (pas == 24) {var nItem = "Item024"}
        else if (pas == 25) {var nItem = "Item025"}
        else if (pas == 26) {var nItem = "Item026"}
        else if (pas == 27) {var nItem = "Item027"}
        else if (pas == 28) {var nItem = "Item028"}
        else if (pas == 29) {var nItem = "Item029"}
        else if (pas == 30) {var nItem = "Item030"}
        else if (pas == 31) {var nItem = "Item031"}
        else if (pas == 32) {var nItem = "Item032"}
        else if (pas == 33) {var nItem = "Item033"}
        else if (pas == 34) {var nItem = "Item034"}
        else if (pas == 35) {var nItem = "Item035"}
        else if (pas == 36) {var nItem = "Item036"}
        else if (pas == 37) {var nItem = "Item037"}
        else if (pas == 38) {var nItem = "Item038"}
        else if (pas == 39) {var nItem = "Item039"}
        else if (pas == 40) {var nItem = "Item040"}
        else if (pas == 41) {var nItem = "Item041"}
        else if (pas == 42) {var nItem = "Item042"}
        else if (pas == 43) {var nItem = "Item043"}
        else if (pas == 44) {var nItem = "Item044"}
        else if (pas == 45) {var nItem = "Item045"}
        else if (pas == 46) {var nItem = "Item046"}
        else if (pas == 47) {var nItem = "Item047"}
        else if (pas == 48) {var nItem = "Item048"}
        else if (pas == 49) {var nItem = "Item049"}
        else if (pas == 50) {var nItem = "Item050"}

        var item_titre = item_db.get(`${nItem}`).map('Name').value()
        var item_id = item_db.get(`${nItem}`).map('ID').value()

        if ((inv_db.get(authorId).has(nItem).value()) && description == "[VIDE]") {
            description = `${item_id} **${item_titre}**\n`
        }
        else if ((inv_db.get(authorId).has(nItem).value()) && description != "[VIDE]") {
            description = `${item_id} **${item_titre}**\n` + description
        }

      }

      const embed = new RichEmbed()
      .setTitle(`**__Voici votre collection :__**`)
      .setColor(0xEAB328)
      .setThumbnail('https://d1u5p3l4wpay3k.cloudfront.net/minecraft_fr_gamepedia/d/d1/Table_d%27enchantement.png')
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setFooter(`Vous possedez ${nmbrItems} / ${nmbrItemsMax} objets !   (${pNmbrItems}% de la collection)`)
      .setDescription(description)
      msg.author.send(embed);
      console.log(`${msg.author.username} a demandé sa collection !`);
      msg.channel.send(`${authorName} ta collection t'a été envoyé en privé !`);
    }

    else if (msg.content.startsWith(prefix + "infoitem")) {
      var pas = msg.content.split(" ")[1];

      if (pas == 0) {var nItem = "Item000"}
      else if (pas == 1) {var nItem = "Item001"}
      else if (pas == 2) {var nItem = "Item002"}
      else if (pas == 3) {var nItem = "Item003"}
      else if (pas == 4) {var nItem = "Item004"}
      else if (pas == 5) {var nItem = "Item005"}
      else if (pas == 6) {var nItem = "Item006"}
      else if (pas == 7) {var nItem = "Item007"}
      else if (pas == 8) {var nItem = "Item008"}
      else if (pas == 9) {var nItem = "Item009"}
      else if (pas == 10) {var nItem = "Item010"}
      else if (pas == 11) {var nItem = "Item011"}
      else if (pas == 12) {var nItem = "Item012"}
      else if (pas == 13) {var nItem = "Item013"}
      else if (pas == 14) {var nItem = "Item014"}
      else if (pas == 15) {var nItem = "Item015"}
      else if (pas == 16) {var nItem = "Item016"}
      else if (pas == 17) {var nItem = "Item017"}
      else if (pas == 18) {var nItem = "Item018"}
      else if (pas == 19) {var nItem = "Item019"}
      else if (pas == 20) {var nItem = "Item020"}
      else if (pas == 21) {var nItem = "Item021"}
      else if (pas == 22) {var nItem = "Item022"}
      else if (pas == 23) {var nItem = "Item023"}
      else if (pas == 24) {var nItem = "Item024"}
      else if (pas == 25) {var nItem = "Item025"}
      else if (pas == 26) {var nItem = "Item026"}
      else if (pas == 27) {var nItem = "Item027"}
      else if (pas == 28) {var nItem = "Item028"}
      else if (pas == 29) {var nItem = "Item029"}
      else if (pas == 30) {var nItem = "Item030"}
      else if (pas == 31) {var nItem = "Item031"}
      else if (pas == 32) {var nItem = "Item032"}
      else if (pas == 33) {var nItem = "Item033"}
      else if (pas == 34) {var nItem = "Item034"}
      else if (pas == 35) {var nItem = "Item035"}
      else if (pas == 36) {var nItem = "Item036"}
      else if (pas == 37) {var nItem = "Item037"}
      else if (pas == 38) {var nItem = "Item038"}
      else if (pas == 39) {var nItem = "Item039"}
      else if (pas == 40) {var nItem = "Item040"}
      else if (pas == 41) {var nItem = "Item041"}
      else if (pas == 42) {var nItem = "Item042"}
      else if (pas == 43) {var nItem = "Item043"}
      else if (pas == 44) {var nItem = "Item044"}
      else if (pas == 45) {var nItem = "Item045"}
      else if (pas == 46) {var nItem = "Item046"}
      else if (pas == 47) {var nItem = "Item047"}
      else if (pas == 48) {var nItem = "Item048"}
      else if (pas == 49) {var nItem = "Item049"}
      else if (pas == 50) {var nItem = "Item050"}

      if (!inv_db.get(authorId).has(nItem).value()) {
        msg.channel.send(`${authorName}, vous ne possedez malheureusement pas encore cette relique !`)
      }

      else {
      var item_titre = item_db.get(`${nItem}`).map('Name').value()
      var item_ref = item_db.get(`${nItem}`).map('Ref').value()
      var item_id = item_db.get(`${nItem}`).map('ID').value()
      var item_img = item_db.get(`${nItem}`).map('img').value()
      var item_footer_text = item_db.get(`${nItem}`).map('footer_text').value()
      var item_footer_img = item_db.get(`${nItem}`).map('footer_img').value()

      var nombrItems = Number(inv_db.get(`${authorId}.nmbrItems`).value())
      inv_db.set(`${authorId}.${nItem}`, 1).write()
      inv_db.get(authorId).set('nmbrItems', nombrItems + 1).write();

      const embed = new RichEmbed()
      .setTitle(`Voici les informations sur la relique ${item_id} :`)
      .setColor(0xEAB328)
      .setThumbnail('https://zupimages.net/up/19/01/t41l.png')
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setFooter(item_footer_text, `${item_footer_img}`)
      .setDescription(`Il sagit de **${item_titre}** dans __${item_ref}__ !!\n`)
      .setImage(`${item_img}`)
      msg.channel.send(embed);
      console.log(`${msg.author.username} a demandé les informations de l'item ${item_id} !`);
    }
  }

  /*else if (msg.content.startsWith(prefix + "annonce")) {
    msg.channel.send(`Et bien bonjour à tous ! Je me présente je suis **GLaDOS** (Genetic Lifeform and Disk Operating System) ! Je suis un bot codé par votre Admin préféré <@264168125929488384> !\nGrâce à moi vous avez 1% de chance pour chaque message dans le <#451055322405011456> ou dans la Cave d'obtenir une *GeekBox* contenant une relique inédite ! Alors soyez actifs et collectionnez-toutes !\nPour plus d'info : __*help__ dans le <#520005010348703754> !`)
    msg.channel.send(`Pour l'instant je ne serais disponnible que lorsque <@264168125929488384> aura son ordinateur d'allumé mais à court terme je pourrais répondre à vos attente 24h/24 !! Merci de votre coopération et commencons les tests !\nBienvenue à **APERTURE SCIENCE** !!`)
  }*/

    if ((msg.channel.id == 543552105919676426) && (msg.author.roles.find("544510790850314259"))) {
      message.member.removeRole('544510790850314259')
      console.log(`${mg.author.username} a posté sa promo !`)
    }
  });
