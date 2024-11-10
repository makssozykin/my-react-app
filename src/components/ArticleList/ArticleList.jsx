const ArticleList = ({ items }) => {
  return (
    <>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </>
  );
};

export default ArticleList;
