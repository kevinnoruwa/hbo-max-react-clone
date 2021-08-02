const SearchModal = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = []; 
        for(let i = 0; i < digit; i++){
            thumbnails.push(comp)
        }

        return thumbnails
    }

return (
    <div className="search-modal">
        <div className="search-modal__input-group">
            <input className="search-modal__input" type="text" placeholder="search for a title" />
            <div className="search-modal__close-btn">
                <i className="fas fa-times"></i>
            </div>
        </div>

        <h3 className="search-modal__title">
            Ppopular Searches
        </h3>
        <div className="search-modal__thumbnails">
            
          {loopComp(
           <div className="search-modal__thumbnail">
               <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2" alt="" /> 
               <div className="search-modal__top-layer">
                   <i className="fas fa-play"></i>
               </div>
            </div>,10
          )}
        </div>
    </div>
   
)
}


export default SearchModal

