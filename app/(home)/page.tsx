import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

export const metadata = {
    title: "Home", 
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie 
                    key={movie.id} 
                    id={movie.id} 
                    poster_path={movie.poster_path} 
                    title={movie.title} 
                />
            ))}
        </div>
    );
}

// ##react rendering method
//export default function Page() {
    // const [isLoading, setisLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const getMovies = async() => {
    //     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    //     const json = await response.json();
    //     setMovies(json);
    //     setisLoading(false);
    // }
    // useEffect(() => {
    //     getMovies();
    // }, []);
    // return (
    //     <div>
    //         {isLoading ? "Loading..." : JSON.stringify(movies)}
    //     </div>
    //  );
//}