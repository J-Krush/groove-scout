"use client";

import { useState } from "react";
import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  LetterFx,
  Input
} from "@once-ui-system/core";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [spotifyLink, setSpotifyLink] = useState("");

  // Mock data for demonstration
  const mockSongs = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      sources: [
        { name: "Spotify", url: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb" },
        { name: "Apple Music", url: "https://music.apple.com/us/album/bohemian-rhapsody/1440811680" },
        { name: "YouTube Music", url: "https://music.youtube.com/watch?v=fJ9rUzIMcZQ" }
      ]
    },
    {
      id: 2,
      title: "Hotel California",
      artist: "Eagles",
      sources: [
        { name: "Spotify", url: "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv" },
        { name: "Apple Music", url: "https://music.apple.com/us/album/hotel-california/1440811680" },
        { name: "Amazon Music", url: "https://music.amazon.com/albums/B000002GQZ" }
      ]
    },
    {
      id: 3,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      sources: [
        { name: "Spotify", url: "https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc" },
        { name: "Apple Music", url: "https://music.apple.com/us/album/stairway-to-heaven/1440811680" },
        { name: "Tidal", url: "https://tidal.com/browse/track/123456" }
      ]
    }
  ];

  const handleSubmit = () => {
    if (spotifyLink.trim()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  if (currentStep === 1) {
    return (
      <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
        <Column maxWidth="s" horizontal="center" gap="l" align="center">
          <Badge
            textVariant="code-default-s"
            border="neutral-alpha-medium"
            onBackground="neutral-medium"
            vertical="center"
            gap="16"
          >
            <Text marginX="4">
              <LetterFx trigger="instant">Groove Scout</LetterFx>
            </Text>
          </Badge>
          <Heading variant="display-strong-xl" marginTop="24">
            Let's find some music
          </Heading>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
            marginBottom="16"
          >
            Drag & drop a Spotify link below
          </Text>
          <Input
            id="spotify-link-input"
            placeholder="Spotify link"
            data-border="rounded"
            height="m"
            width="full"
            value={spotifyLink}
            onChange={(e) => setSpotifyLink(e.target.value)}
            onDrop={(e) => {
              console.log('ON DROP');
              console.log(e);
            }}
          />
          <Button
            id="scout-for-music"
            data-border="rounded"
            weight="default"
            arrowIcon
            onClick={handleSubmit}
            disabled={!spotifyLink.trim()}
          >
            Scout for Music
          </Button>
        </Column>
      </Column>
    );
  }

  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="l" horizontal="center" gap="l" align="center">
        {/* Header with input at top */}
        <Column width="full" gap="m" align="center">
          <Badge
            textVariant="code-default-s"
            border="neutral-alpha-medium"
            onBackground="neutral-medium"
            vertical="center"
            gap="16"
          >
            <Text marginX="4">
              <LetterFx trigger="instant">Groove Scout</LetterFx>
            </Text>
          </Badge>
          <Heading variant="display-strong-xl" marginTop="24">
            Music Sources Found
          </Heading>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
            marginBottom="16"
          >
            Here are the songs and where to find them
          </Text>
          
          {/* Input moved to top */}
          <Column width="full" maxWidth="m" gap="m">
            <Input
              id="spotify-link-input"
              placeholder="Spotify link"
              data-border="rounded"
              height="m"
              width="full"
              value={spotifyLink}
              onChange={(e) => setSpotifyLink(e.target.value)}
            />
            <Button
              data-border="rounded"
              weight="default"
              onClick={handleBack}
            >
              ← Back to Search
            </Button>
          </Column>
        </Column>

        {/* Results Section */}
        <Column width="full" gap="l">
          {mockSongs.map((song) => (
            <Column
              key={song.id}
              width="full"
              padding="l"
              data-border="rounded"
              data-surface="filled"
              gap="m"
            >
              <Column gap="s">
                <Heading variant="heading-strong-l">
                  {song.title}
                </Heading>
                <Text
                  variant="text-default-l"
                  onBackground="neutral-weak"
                >
                  {song.artist}
                </Text>
              </Column>
              
              <Column gap="s">
                <Text
                  variant="text-default-m"
                  onBackground="neutral-medium"
                  marginBottom="8"
                >
                  Available on:
                </Text>
                <Column gap="s">
                  {song.sources.map((source, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      data-border="rounded"
                      weight="default"
                      width="full"
                      horizontal="start"
                      gap="m"
                      onClick={() => window.open(source.url, '_blank')}
                    >
                      <Badge
                        textVariant="code-default-s"
                        border="neutral-alpha-medium"
                        onBackground="neutral-medium"
                      >
                        {source.name}
                      </Badge>
                      <Text variant="text-default-m">
                        Listen on {source.name}
                      </Text>
                    </Button>
                  ))}
                </Column>
              </Column>
            </Column>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
