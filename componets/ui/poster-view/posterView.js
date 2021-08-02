const posterView = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = []; 
        for(let i = 0; i < digit; i++){
            thumbnails.push(comp)
        }

        return thumbnails
    }

return (
    <div className="poster-view">
        <h3 className="poster-view__title">Movies</h3>
        <div className="poster-view__thumbnails">
            
          {loopComp(
           <div className="poster-view__thumbnail">
               <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2" alt="" /> 
               <div className="poster-view__top-layer">
                   <i className="fas fa-play"></i>
               </div>
            </div>,10
          )}
        </div>
    </div>
   
)
}


export default posterView

