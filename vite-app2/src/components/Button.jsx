export default function Button ({buttonText, reqType, setReqType}){
    return(
            <button
                type="button"
                onClick={() => setReqType(buttonText)}
                className={buttonText === reqType ? 'selected' : null}
            >
                {buttonText}
            </button>
    )
}