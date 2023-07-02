import { Helmet } from "react-helmet";
import "./not-found.css"
import notfound from "../../media/404.mp4";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 Not Found!</title>
            </Helmet>
            <div className="not-found">
                <video autoPlay={true} muted={true} loop={true} id="404Video">
                    <source src={notfound} type="video/mp4" />
                </video>
                <p>
                    404 Not Found!
                </p>
            </div>
        </>
    );
}