import PropTypes from 'prop-types'; 
import List from '../../components/List/List'; 

const data =
 {items: [
    {
      name:"teslo", id:1524, 
      uniqueUrlName: null, 
      photos:{small:null, large: null}, 
      status:null, 
      followed:false
    }
  ],
    
    totalCount:521,
    error:null
 }

 List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, 
    uniqueUrlName: PropTypes.string,
    photos: PropTypes.shape({
      small: PropTypes.string,
      large: PropTypes.string
    }),
    status: PropTypes.string,
    followed: PropTypes.bool.isRequired
  }))
 }