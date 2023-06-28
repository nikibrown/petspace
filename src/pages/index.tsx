import * as React from "react"
import { HeadFC, PageProps, Link, graphql } from "gatsby"
import Card from '../components/Card'
import Layout from '../components/Layout'

interface BreedQueryResult {
  allContentfulSpecies: {
    nodes: {
      speciesType: string
      slug: string
      id: string
      breeds: {
        slug: string
        breedName: string
        breedSummary: {
          raw: string
        };
        breedPhoto: {
          description: string
          gatsbyImageData: {
            layout: string
          }
        }
      }[]
    }[]
  }
}

export const pageQuery = graphql`
  query MyQuery {
    allContentfulSpecies(sort: { speciesType: ASC }) {
      nodes {
        speciesType
        slug
        id
        breeds {
          slug
          breedName
          breedSummary {
            raw
          }
          breedPhoto {
            description
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

const BreedListPage: React.FC<PageProps<BreedQueryResult>> = ({ data }) => {
  return (
    <Layout pageTitle="Pet Species">
      <h1>Pet Species</h1>

      <ul>
        {data.allContentfulSpecies.nodes.map(speciesData => (
          <li key={speciesData.id}>
            <Link to={`/#${speciesData.slug}s`}>{speciesData.speciesType}s</Link>
          </li>
        ))}
      </ul>

      {data.allContentfulSpecies.nodes.map(speciesData => (
        <div key={speciesData.slug}>
          <h2 id={`${speciesData.slug}s`}>{speciesData.speciesType} Breeds: </h2>

          <div className="cards">
            {speciesData.breeds.map(breedData => (
              <h1>{JSON.stringify(breedData.breedName)}</h1>
						
						))}
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default BreedListPage

export const Head: HeadFC = () => <title>Home Page</title>
