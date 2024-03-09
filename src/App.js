const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // create a list of friends component
  // create a split bill form component

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList({}) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  const debt = (() => {
    switch (true) {
      case friend.balance > 0:
        return {
          className: "green",
          message: `${friend.name} owes you ${Math.abs(friend.balance)}`,
        };

      case friend.balance < 0:
        return {
          className: "red",
          message: `you owe ${friend.name} ${Math.abs(friend.balance)}`,
        };

      default:
        return {
          className: "",
          message: `you and ${friend.name} are even`,
        };
    }
  })();
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p className={debt.className}>{debt.message}</p>
    </li>
  );
}

function FormSplitBill({}) {}
