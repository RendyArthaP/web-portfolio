export interface PortfolioCards {
  id?: React.Key;
  properties: {
    created_by: {
      created_by: {
        avatar_url: string;
        id: string;
        name: string;
        person: {
          email: string;
        };
      };
    };
    description: {
      rich_text: {
        plain_text: string;
        text: {
          content: string;
        };
      }[];
    };
    id: {
      number: 0;
    };
    image: {
      files: {
        file: {
          url: string;
          name: string;
        };
      }[];
    };
    link: {
      url: string;
    };
    name: {
      title: {
        text: {
          content: string;
        };
      }[];
    };
    published: {
      checkbox: boolean;
    };
    tags: {
      multi_select: any[];
    };
  };
}
