import { writable } from "svelte/store"

interface AudioStore {
  playing: boolean
  audio: HTMLAudioElement | null
}

const store: AudioStore = {
  playing: false,
  audio: null,
}

export const audioStore = writable(store)
