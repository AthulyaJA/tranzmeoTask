const TextError = (props: any) => {
    return (
        <>
            <div className="error-outer">
                <div className="errors">
                    <i className="fa fa-info-circle"></i>&nbsp;&nbsp;
                    {props?.children}
                </div>
            </div>
        </>
    );
};

export default TextError;
