const searchBox = ({ serchChange}) => {
  return(
      <div className='pa2 '>
        <input
            className='pa3 ba bg-green bg-lightest-blue'
            type='search'
            placeholder={"Search robots"}
            onChange={serchChange}/>
      </div>
  )
}
export default searchBox;