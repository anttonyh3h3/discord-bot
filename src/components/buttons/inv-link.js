module.exports = {
  data: {
    name: `inv-link`,
  },
  async execute(interaction, client) {
    const message = `> ${interaction.user}\n> Here's your invitation link\n> https://discord.gg/vKABVe9Q36`;

    await interaction.reply({
      content: message,
    });
  },
};
