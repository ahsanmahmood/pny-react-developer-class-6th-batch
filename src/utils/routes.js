// Generic Routes
module.exports.HOME = '/'

// PRoducts Routes
module.exports.CREATE_PRODUCT = '/product/create'
module.exports.VIEW_PRODUCT = id => `/product/view/${id}`
module.exports.EDIT_PRODUCT = id => `/product/edit/${id}`
