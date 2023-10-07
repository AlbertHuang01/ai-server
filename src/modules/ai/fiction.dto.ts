import {FictionEntity} from "./fiction.entity";

export type FictionDto = Omit<FictionEntity, 'swipers' | 'topics' | 'tags'> & {
    swipers: string[]
    topics: string[]
    tags: string[]
}
