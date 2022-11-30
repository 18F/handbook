---
title: Inclusion Bot
questions:
  - g-diversity
  - g-accessibility
---

An inclusive culture is built one interaction at a time, and language is the
foundation. Inclusion Bot is one of the tools we use to help us live [our
values]({% page "/about-us/tts-history/#our-values" %}) here in TTS.

To quote Rachel Cohen-Rottenberg: “If a culture’s language is full of pejorative
metaphors about a group of people, that culture is not going to see those people
as fully entitled to the same inclusion as people in a more favored group.”

Inclusion Bot is integrated into the TTS Slack and passively listens for words
or phrases that have racist, sexist, ableist, or otherwise exclusionary or
discriminatory histories or backgrounds
([see full list here](https://github.com/18F/charlie/blob/main/InclusionBot.md#ableist)).
When it hears those words, it quietly lets the speaker know and offers some
suggested alternatives:

<figure>
  {% image "_img/inclusion-bot-1.png" "Slack screenshot. Inclusion bot responds with a message only the user can see: Hello! Our inclusive TTS culture is built one interaction at a time, and inclusive language is the foundation. This bot helps us practice our inclusive values here in TTS. Some of your message could be unintentionally non-inclusive. Here are some alternatives that might work better. Instead of saying 'dumb,' how about 'foolish?' Instead of saying 'guys,' how about 'yall?'" %}
  <figcaption>
    Inclusion Bot responding to the words "dumb" and "guys."
  </figcaption>
</figure>

The bot's message includes a button someone can click to get more information
about the words or phrases that it's responding to. This can include historical
context to explain why the language can be non-inclusive to help us all learn
and grow. An emoji is also added to the message that included the words, to
indicate the Inclusion Bot was triggered and sent a message to the writer.

<figure>
  {% image "_img/inclusion-bot-2.png" "Slack screenshot. Inclusion bot responds with a message only the user can see: 'Dumb' arose as a derogatory reference to people with intellectual disabilities. We want to avoid stigmatizing disabilities. 'Guys' is commonly used to refer to groups of people, but it is a gendered pronoun. It can make people who do not identify as 'guys' feel excluded, even if that's not the intent. Regardless of cultural background or innocent intent, we recommend alternative language that makes it clear everyone is included in the conversation! Consider a word like 'yall' or 'folks' instead!" %}
  <figcaption>
    Inclusion Bot providing more context for its message about the words "dumb"
    and "guys."
  </figcaption>
</figure>

**Inclusion Bot is not a disciplinary tool.** When the bot alerts someone to
potentially non-inclusive language, that person is not in trouble! The bot
doesn't exist to punish anyone, but rather to help us live up to our stated
values of inclusion and respect. If someone is using disrespectful language
intentionally or is otherwise creating a hostile working environment, that
should be escalated to a supervisor.

[Inclusion Bot](https://github.com/18F/charlie/blob/main/InclusionBot.md) is one
of the features of our general-purpose Slack bot called
[Charlie, source code on GitHub](https://github.com/18f/charlie#inclusion-bot).
A full list of language that Inclusion Bot listens for can be found
[here](https://github.com/18F/charlie/blob/main/InclusionBot.md#ableist).
