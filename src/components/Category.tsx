type CategoryProps={
    category:string

}


function Category({ category }:CategoryProps) {
    return (
      <tr>
        <th>
          {category}
        </th>
      </tr>
    );
  }
  
  export default  Category