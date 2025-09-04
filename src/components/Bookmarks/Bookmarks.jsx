import PropTypes from 'prop-types'
import Bookmark from '../bookmark/bookmark'

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/2 bg-gray-300 ml-4 mt-2 pt-4">
      <h2 className="text-2xl mb-4 text-center ">Bookmarks</h2>
      {
        bookmarks.map(bookmark => (
          <Bookmark key={bookmark.id} bookmark={bookmark} />
        ))
      }
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired
}

export default Bookmarks
