const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("Button testing"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("follow-ig")
      .setLabel("Follow to Toneko")
      .setStyle(ButtonStyle.Success);

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
