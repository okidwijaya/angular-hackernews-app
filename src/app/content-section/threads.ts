export interface ItemThread {
    by: string,
    descendants: number,
    id: number,
    kids: [],
    score: number,
    text: string,
    time: Date,
    title: string,
    type: string,
    url: string
}

export interface Story {
    by: string,
    descendants: number,
    id: number,
    kids: [],
    score: number,
    text: string,
    time: number,
    title: string,
    type: string,
    url: string
}

export interface StoryUpdateId {
    storylastest: [],
}

export interface KidsItem {
    by: string,
    id: number,
    kids: [],
    parent: number,
    text: string,
    time: number,
    type: string
}

export interface KidsItemContent {
    by: string,
    id: number,
    kids: [],
    parent: number,
    text: string,
    time: number,
    type: string
}

export interface TestRes {
    testId: number;
}

export interface DisplayComment {
    val: boolean;
}