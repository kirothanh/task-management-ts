interface ObjectPagination {
  currentPage: number,
  limitItems: number,
  skip?: number,
  totalPage?: number
}

const paginationHelper = (objectPagination: ObjectPagination, query: Record<string, any>, countProducts: number): ObjectPagination => {
  if(query.page) {
    objectPagination.currentPage = parseInt(query.page);
  }

  if(query.limit) {
    objectPagination.limitItems = parseInt(query.limit)
  }

  objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;

  const totalPage = Math.ceil(countProducts / objectPagination.limitItems);
  objectPagination.totalPage = totalPage;

  return objectPagination;
}

export default paginationHelper