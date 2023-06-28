import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import Layout from '../components/Layout'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface AnimalSinglePageProps {
  data: {
    contentfulAnimals: {
      id: string;
      animalName: string;
      animalPhoto: {
        gatsbyImageData: IGatsbyImageData;
      };
      animalDescription: {
        raw: string;
      };
      adoptionLink: string;
      speciesType: {
        slug: string;
      };
      breedType: {
        slug: string;
      };
    };
  };
}

export const query = graphql`
  query ($slug: String)  {
    contentfulAnimals(slug: {eq: $slug }) {
      id
      animalName
      animalPhoto {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      animalDescription {
        raw
      }
      adoptionLink
      speciesType {
        slug
      }
      breedType {
        slug
      }
    }
  }
`

const AnimalSinglePage: React.FC<AnimalSinglePageProps> = ({ data }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => {
        return <h2>{children}</h2>;
      },
    },
  };

  return (
    <Layout>
      <p>
        <Link
          to={`/${data.contentfulAnimals.speciesType.slug}/breed/${data.contentfulAnimals.breedType.slug}`}
        >
          Back to Breeds
        </Link>
      </p>

      <h1>{data.contentfulAnimals.animalName}</h1>

      {data.contentfulAnimals.animalPhoto && (
        <GatsbyImage
          image={getImage(data.contentfulAnimals.animalPhoto)}
          alt={data.contentfulAnimals.animalName}
        />
      )}

      <div className="desc">{renderRichText(data.contentfulAnimals.animalDescription, options)}</div>

      {data.contentfulAnimals.adoptionLink && (
        <Link to={data.contentfulAnimals.adoptionLink}>
          Adopt {data.contentfulAnimals.animalName}
        </Link>
      )}
    </Layout>
  );
};

export default AnimalSinglePage;