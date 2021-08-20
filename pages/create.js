import Head from "next/head";
import { useStateContext } from "../componets/hboProvider";

export default function createUser() {
  const globalState = useStateContext();
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who Is Watching?</span>
        </div>
        <div className="create-user__form">
          <img
            src={globalState.defaultUserImg}
            alt=""
            className="create-user__user-img"
          />
          <div className="create-user__input-group">
            <label htmlFor="">Name</label>
            <input
              onChange={globalState.createUserAction}
              value={globalState.user}
              type="text"
              className="create-user__inputText"
            />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(99,94,135,1) 52%, rgba(52,0,255,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color "
                style={{
                  background:
                    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color "
                style={{
                  background:
                    "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color "
                style={{
                  background:
                    "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(37,233,225,1) 100%, rgba(52,0,255,1) 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  );
}
