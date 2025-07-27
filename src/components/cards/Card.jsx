import './Cards.css';

const Card = ({
    imgUrl,
    title,
    description,
    actionLabel,
    action = () => { },
}) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="card-name mt-2">
<h1 className="text-xs font-bold text-indigo-800">{title}</h1>
            </div>


            <div className="card-body">
                {/* Descripción centrada */}
                <p className="text-center text-sm">{description}</p>
            </div>

            <div className="card-footer">
                {/* Botón rojo con efecto hover */}
                <button onClick={() => action()}>{actionLabel}</button>
            </div>
        </div>
    );
};

export default Card;
