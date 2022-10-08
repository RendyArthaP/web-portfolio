import { NotionToMarkdown } from "notion-to-md";
import { Client } from "@notionhq/client";

export const authSecretKey = process.env.NOTION_API_KEY ?? "";

export const databaseBlogsKey = process.env.NOTION_DATABASE_BLOGS_KEY ?? "";

export const databasePortfolioKey =
  process.env.NOTION_DATABASE_PORTFOLIO_KEY ?? "";

const notion = new Client({
  auth: authSecretKey,
});

const blocksMarkdown = new NotionToMarkdown({
  notionClient: notion,
});

export const getPublishedBlogs = async () => {
  const response = await notion.databases.query({
    database_id: databaseBlogsKey,
    filter: {
      property: "published",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results;
};

export const getPublishedPortfolio = async () => {
  const response = await notion.databases.query({
    database_id: databasePortfolioKey,
    filter: {
      property: "published",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results;
};

export const getPublishedDetailBlogs = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: databaseBlogsKey,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const detailBlogsPages = response.results[0];
  const markdownBlocks = await blocksMarkdown.pageToMarkdown(
    detailBlogsPages.id,
  );
  const markdown = blocksMarkdown.toMarkdownString(markdownBlocks);

  return {
    detailBlogsPages,
    markdown,
  };
};
