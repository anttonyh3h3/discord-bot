const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Embed testing"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`This is an EMBED`)
      .setDescription("This is a very cool description!")
      .setColor(0x39ff14)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(interaction.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://instagram.com/toneko.exe`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .setURL(`https://saweria.co/AntTony`)
      .addFields([
        {
          name: "Field 1",
          value: "Field Value 1",
          inline: true,
        },
        {
          name: "Field 2",
          value: "Field value 2",
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
