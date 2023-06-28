import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Stats from '../components/Stats'

interface BreedQueryResult {
  contentfulBreed: {
    id: string
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
      title: string
      description: string
      url: string
      gatsbyImageData: {
        layout: string
      }
    }
    breedShedding: number
    slug: string
    animalsForAdoption: {
      id: string
      slug: string
      animalName: string
      speciesType: {
        speciesType: string
      }
      breedType: {
        breedName: string
      }
      animalPhoto: {
        gatsbyImageData: {
          layout: string
        }
      }
      animalDescription: {
        raw: string
      }
    }[]

  }
}

export const query = graphql`
  query ($slug: String) {
    contentfulBreed(slug: { eq: $slug }) {
      id
      breedFriendliness
      breedDescription {
        raw
      }
      breedLifeExpectancyMax
      breedLifeExpectancyMin
      breedName
      species {
        speciesType
      }
      breedPhoto {
        title
        description
        url
        gatsbyImageData(layout: FULL_WIDTH)
      }
      breedShedding
      slug
      animalsForAdoption {
        id
        slug
        animalName
        speciesType {
          speciesType
        }
        breedType {
          breedName
        }
        animalPhoto {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        animalDescription {
          raw
        }
      }
      species {
        slug
      }
    }
  }
`

const BreedSinglePage: React.FC<PageProps<BreedQueryResult>> = ({ data }) => {
  const {
    breedName,
    breedLifeExpectancyMin,
    breedLifeExpectancyMax,
    breedFriendliness,
    breedShedding,
    breedDescription,
    breedPhoto,
    animalsForAdoption,
    species,
    slug,
  } = data.contentfulBreed

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  }

  const statData = {
    breedLifeExpectancyMin: breedLifeExpectancyMin,
    breedLifeExpectancyMax: breedLifeExpectancyMax,
    breedFriendliness: breedFriendliness,
    breedShedding: breedShedding,
  }

  return (
    <Layout>
      <p>
        <Link to={`/`}>Back to Pets</Link>
      </p>

      <h1>{breedName}</h1>

      {breedPhoto && (
        <GatsbyImage image={getImage(breedPhoto)} alt={breedPhoto.description} />
      )}

      <div className="desc">{renderRichText(breedDescription, options)}</div>

      <Stats statData={statData} />

      {animalsForAdoption && (
        <div className="animals-for-adoption">
          <h2>Adopt a {breedName} today!</h2>
          <div className="cards">
            {animalsForAdoption.map((animalData) => (
              <Card
                cardData={animalData}
                url={`/${species.slug}/breed/${slug}/${animalData.slug}`}
                key={animalData.slug}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  )
}

export default BreedSinglePage
