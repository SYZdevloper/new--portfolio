export default function ProposalModal() {
    return (
        <div className="modal" id="proposalModal">
            <div className="modal-card">
                <div className="modal-head">
                    <div>
                        <p className="eyebrow">Project enquiry</p>
                        <h2>Tell us about your project</h2>
                    </div>
                    <button className="close-modal" id="closeModal">&times;</button>
                </div>
                <form className="form-grid" id="proposalForm">
                    <div className="field">
                        <label>Name</label>
                        <input id="modalName" required />
                    </div>
                    <div className="field">
                        <label>Work email</label>
                        <input type="email" required />
                    </div>
                    <div className="field">
                        <label>Company</label>
                        <input />
                    </div>
                    <div className="field">
                        <label>Industry family</label>
                        <select>
                            <option>Technology &amp; Media</option>
                            <option>Manufacturing &amp; Engineering</option>
                            <option>Resources &amp; Built World</option>
                            <option>Consumer, Commerce &amp; Travel</option>
                            <option>Finance &amp; Professional Services</option>
                            <option>Health, Education &amp; Public</option>
                            <option>Not sure</option>
                        </select>
                    </div>
                    <div className="field full">
                        <label>Project requirements</label>
                        <textarea placeholder="Tell us about your business and what you need"></textarea>
                    </div>
                    <button className="btn primary full" type="submit">Send Enquiry &rarr;</button>
                </form>
                <div className="success-message" id="modalFormMessage">
                    <div className="success-icon">&#10003;</div>
                    <h3>Enquiry Received</h3>
                    <p>We've received your requirements and will be in touch within 1 business day.</p>
                </div>
            </div>
        </div>
    );
}
