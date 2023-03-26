const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("link")
    .setDescription("Get server invitaion link"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Invite Link`)
      .setDescription("Hi, you requested an invitation link")
      .setColor(0x39ff14)
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
      .addFields([
        {
          name: "Server Invitation Link",
          value: "https://discord.gg/vKABVe9Q3",
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
