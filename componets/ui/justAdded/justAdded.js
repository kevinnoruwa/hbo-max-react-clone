const justAdded = () => {
    const loopComp = (comp, digit) => {
        let thumbnails = []; 
        for(let i = 0; i < digit; i++){
            thumbnails.push(comp)
        }

        return thumbnails
    }

return (
    <div className="just-added">
        <h3 className="just-added__title">Just Added</h3>
        <div className="just-added__thumbnails">
            
          {loopComp(
           <div className="just-added__thumbnail">
               <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2" alt="" /> 
               <div className="just-added__top-layer">
                   <i className="fas fa-play"></i>
               </div>
            </div>,10
          )}
        </div>
    </div>
   
)
}


export default justAdded

