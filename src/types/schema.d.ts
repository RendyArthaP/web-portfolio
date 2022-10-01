export interface BlogCards {
  id?: React.Key;
  properties: {
    images: {
      files: {
        file: {
          url?: string;
        };
      }[];
    };
    dates: {
      date: {
        start: string;
      };
    };
    title: {
      title: {
        text: {
          content?: string;
        };
      }[];
    };
    description: {
      rich_text: string | any[];
    };
    tags: {
      multi_select: any[];
    };
    slug: {
      formula: {
        string: any;
      };
    };
  };
}
