import PropTypes from 'prop-types'
import Bookmark from '../bookmark/bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/2 bg-gray-300 ml-4 mt-2 pt-4">
        <div>
            <h3 className="text-xl font-semibold text-center mb-2">
  Reading Time: {readingTime} min
</h3>

        </div>
      <h2 className="text-2xl mb-4 text-center ">Bookmarks</h2>
      {
        bookmarks.map(bookmark => (
          <Bookmark key={bookmark.id} bookmark={bookmark}  />
        ))
      }
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  reading_time:PropTypes.number.isRequired
}

export default Bookmarks
