"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";

function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm();

	const submitForm = async (data) => {
		try {
			const payload = {
				name: data.name,
				email: data.email,
				phone: data.phone || "",
				company: data.company || "",
				enquiryType: data.enquiryType || "general",
				message: data.message,
				source: "contact_page",
			};

			const res = await fetch("https://api.messegy.com/api/v1/enquiry", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json", // 🔥 important
				},
				body: JSON.stringify(payload),
			});

			// read response safely
			const text = await res.text();

			let result;
			try {
				result = JSON.parse(text);
			} catch {
				console.error("Non-JSON response:", text); // debug
				throw new Error("Server returned invalid response");
			}

			if (!res.ok) {
				throw new Error(result?.message || "Request failed");
			}

			toast.success(result.message || "Enquiry submitted successfully!");
			reset();

		} catch (error) {
			console.error("Submit Error:", error);
			toast.error(error.message || "Something went wrong");
		}
	};

	return (
		<div className="sofax-field-box ml-50">
			<ToastContainer position="bottom-right" />

			<h3>Send us a message</h3>

			<form onSubmit={handleSubmit(submitForm)}>
				<div className="row">

					<div className="col-lg-6">
						<Field label="Your Name" error={errors.name}>
							<input
								{...register("name", { required: "Name is required" })}
								type="text"
							/>
						</Field>
					</div>

					<div className="col-lg-6">
						<Field label="Email" error={errors.email}>
							<input
								{...register("email", { required: "Email is required" })}
								type="email"
							/>
						</Field>
					</div>

					<div className="col-lg-6">
						<Field label="Phone">
							<input {...register("phone")} type="text" />
						</Field>
					</div>

					<div className="col-lg-6">
						<Field label="Company">
							<input {...register("company")} type="text" />
						</Field>
					</div>

					<div className="col-lg-12">
						<Field label="Message" error={errors.message}>
							<textarea
								{...register("message", { required: "Message is required" })}
								placeholder="Write your message"
							/>
						</Field>
					</div>



					<div className="col-lg-12">
						<div className="tac">
							<button id="sofax-submit-btn" className="mt-30" type="submit" disabled={isSubmitting}>
								{isSubmitting ? "Submitting..." : "Send Message"}
							</button>
						</div>
					</div>

				</div>
			</form>
		</div>
	);
}

export default ContactForm;