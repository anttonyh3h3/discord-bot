module.exports = {
  data: {
    name: `follow-ig`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `https://instagram.com/toneko.exe`,
    });
  },
};
