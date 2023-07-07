import styles from "./Users.module.css";

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
              id: 1,
              pfotoUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamEsYy5stZ-mASB8eVL_0bjIy1kpbaKmYrBHsDyHrhg&s",
              followed: false,
              fullName: "Mickhael",
              status: "I am a boss",
              location: { city: "Moscow", country: "Russia" },
            },
            {
              id: 2,
              pfotoUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamEsYy5stZ-mASB8eVL_0bjIy1kpbaKmYrBHsDyHrhg&s",
              followed: true,
              fullName: "Tatiana",
              status: "I am a staffboss",
              location: { city: "Moscow", country: "Russia" },
            },
            {
              id: 3,
              pfotoUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamEsYy5stZ-mASB8eVL_0bjIy1kpbaKmYrBHsDyHrhg&s",
              followed: false,
              fullName: "Alexander",
              status: "I am a middle",
              location: { city: "Moscow", country: "Russia" },
            },
            {
              id: 4,
              pfotoUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamEsYy5stZ-mASB8eVL_0bjIy1kpbaKmYrBHsDyHrhg&s",
              followed: true,
              fullName: "Marya",
              status: "I am a middle",
              location: { city: "Moscow", country: "Russia" },
            },
            {
              id: 5,
              pfotoUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamEsYy5stZ-mASB8eVL_0bjIy1kpbaKmYrBHsDyHrhg&s",
              followed: false,
              fullName: "Ilia",
              status: "I am a junior",
              location: { city: "Moscow", country: "Russia" },
            },
          ]);
    }
  
  return (
    <div>
      {props.users.map(function (u) {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.pfotoUrl} className={styles.userPfoto}></img>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Users;
