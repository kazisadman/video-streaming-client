import PropTypes from 'prop-types';
import useFetchData from '../hooks/useFetchData';
import Avatar from './ui/avatar';
import Loader from './loader';

const Videocomment = ({videoId}) => {
      const { data,loading } = useFetchData(`/comment/${videoId}`);
      const comments = data?.data?.docs || []
    //   const {avatar,fullName,userName} = data?.data?.docs.owner || {}

    return (
      <div>
        {loading ? (
          <Loader></Loader>
        ) : (
          <div>
            {comments.map((comment) => (
              <div className="flex gap-4 mb-5 items-start" key={comment._id}>
                <div>
                  <Avatar size={"10"} url={comment.owner.avatar}></Avatar>
                </div>
                <div>
                  <p className="text-sm">{comment.owner.fullName}</p>
                  <p>{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

Videocomment.propTypes = {
    videoId:PropTypes.string
};

export default Videocomment;