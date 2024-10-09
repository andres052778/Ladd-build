import {CollaborationScreenStyled} from "./CollaborationScreenStyled.tsx";

export default function CollaborationScreen():JSX.Element {
    return (
        <CollaborationScreenStyled>
            <section>
                <div className="info-container">
                    <h1> OUR COMPANY </h1>
                    <pre> "En LADD, we also collaborate with various companies and undertake projects for other architectural firms or builders. If you want us to complete your project or a specific part of it, leave it in our hands and we can assist you so that together we can be a great team." </pre>
                </div>
            </section>
        </CollaborationScreenStyled>
    );
}