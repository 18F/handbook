// Given a Slack channel name and optional display name, return the text for an
// anchor element that will link to that Slack channel.
module.exports = (channel, name) => {
  const cleanChannel = channel.replace(/^#/, "");
  return `<a href="https://gsa-tts.slack.com/channels/${cleanChannel}" target="_blank">${
    name ?? `#${cleanChannel}`
  }</a>`;
};
