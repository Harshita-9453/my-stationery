const PriceFilter=({sortPrice})=>{
    return(
        <>
        <div className="form-group col-md-4">
        <form action="">
        <label htmlFor="sort">Filter</label>
        <select id="sort" name="sort" className="form-control"  onChange={() => sortPrice()}>
        <option value="#"></option>
          <option value="highest">Hight to Low Price</option>
          <option value="lowest">Low to Hight Price</option>
        </select>
        </form>
        </div>
        </>
    )
}
export default PriceFilter;