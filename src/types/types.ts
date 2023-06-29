import type { IGatsbyImageData } from "gatsby-plugin-image"

export type Species = {
    speciesType: string
    slug: string
    id: string
    breeds: {
        slug: string
        breedName: string
        breedSummary: {
            raw: string
        }
        breedPhoto: {
            gatsbyImageData: IGatsbyImageData
        }
    }[]
}

export type SingleBreed = {
    id: string
    slug: string
    breedFriendliness: number
    breedDescription: {
        raw: string
    }
    breedLifeExpectancyMax: number
    breedLifeExpectancyMin: number
    breedName: string
    species: {
        speciesType: string
    }
    breedPhoto: {
        gatsbyImageData: IGatsbyImageData
    }
    breedShedding: number
    animalsForAdoption: {
        id: string
        slug: string
        animalName: string

        animalPhoto: {
            gatsbyImageData: IGatsbyImageData
        }
    }[]
}

export type SingleAnimal = {
    id: string
    animalName: string
    animalPhoto: {
        gatsbyImageData: IGatsbyImageData
    }
    animalDescription: {
        raw: string
    }
    adoptionLink: string
}
