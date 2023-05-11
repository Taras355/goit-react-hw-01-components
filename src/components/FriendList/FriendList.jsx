import PropTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { List } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map((friend) => {
                return <FriendListItem key={friend.id} friend={friend} />;
            })}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired
};
