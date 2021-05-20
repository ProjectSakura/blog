// styles
import { PageBtn, PageGroup } from "./styles";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <PageGroup>
      {pageNumbers.map((num) => (
        <PageBtn inverted circular color="blue" size="tiny" href="#" key={num} onClick={() => paginate(num)}>
          {num}
        </PageBtn>
      ))}
    </PageGroup>
  );
}
export default Pagination;
