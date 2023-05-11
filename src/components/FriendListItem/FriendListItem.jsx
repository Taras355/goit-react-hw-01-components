import PropTypes from "prop-types";
import { Item, Avatar, Status, Name } from "./FriendListItem.styled";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <Item>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt={`${name}'s avatar`} width="48" />
            <Name>{name}</Name>
        </Item>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired
};
