// homeview
export const SET_PRODUCT = (state, product) => {
    state.product = product;
};

export const BEST_PRODUCT = (state, bestProduct) => {
    state.dataBestProduct = bestProduct;
}

// productview
export const SEARCH_PRODUCT = (state, searchProduct) => {
    state.dataSearchProduct = searchProduct;
}

export const SUBMIT_PROSES = (state, e) => {
     //  this.$router.push({ path : '/product' })
     let kirimMouse = state.dataSearch;
     let kirimKeyboard = e.target.value;
     if(kirimMouse || kirimKeyboard === true){
         this.tambahEmit(state.dataSearch);
         state.dataSearch = "";
     }
}