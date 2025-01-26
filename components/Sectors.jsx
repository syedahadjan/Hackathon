import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const sections = [
  {
    heading: "Government & Public Sector",
    logoUrl: "/assets/textPage/public.svg",
    description: [
      "Our clients require a seamless tax advisory and litigation service at all levels, whether on a stand-alone basis or as an integral part of the full legal service offered by M.D. Law Associates.",
      "That’s why, with tax specialists across our teams in Karachi, Islamabad and Rawalakot. AJK. we are able to offer both domestic and cross-border advice wherever our clients need it, whether they are financial institutions, corporate entities, funds or individuals.",
      "The depth and breadth of our knowledge ensures that we are able to support our clients’ business needs successfully and provide high-quality, innovative tax solutions in the increasingly complex area of tax legislation and practice.",
      "Our dispute resolution team also regularly engages in complex tax litigation at all levels.",
      "Our associates have expertise in financial & insurance services.",
    ],
  },
  {
    heading: "Financial Banking & Islamic Finance",
    logoUrl: "/assets/textPage/bank.svg",
    description: [
      // financial services # 1
      "Financial Services:",
      "The Financial services form the core of M.D. Law Associate’s client base and throughout our firm’s history we have brought together lawyers with specialist legal expertise and deep industry knowledge from across all our practice areas and offices to assist in delivering industry leading solutions for banking & insurance sector.",
      "With partners who focus exclusively on financial transactions in both our Karachi, Islamabad and Rawalakot AJK offices, we are well placed to advise on complex deals that often involve more than one jurisdiction.",
      "Buffeted by a vast and growing regulatory reform agenda, volatile financial markets and adverse economic environment, the corporate/ SME clients face considerable strategic challenges as they seek to navigate a path to achieving the desired results. Our teams are working with our financial institution clients across Pakistan to help them anticipate and prepare for change across the full scope of their businesses, both in terms of their own organizations and in terms of the products they offer their customers.",
      "Dedicated groups focus on key issues for banks, mutual funds, venture capital and private equity funds, insurers, asset managers and stock exchanges, supported by specialists regularly working with global investment bodies and brokerage houses.",

      //   Insurance # 2
      "Insurance:",
      "To support our clients, we have one of the largest insurance teams, which can offer them complete solutions across their claims, corporate, commercial, regulatory and compliance business needs. Our team’s work spans the spectrum of insurance.",
      "By building strong relationships with our clients, we develop a strategic understanding of their business objectives and help them to achieve their goals.",

      // Banking and Finance
      "Banking & Finance:",
      "M.D. Law Associates provides specialist advice in relation to the full spectrum of financial products. This includes syndicate lending and leveraged and acquisition finance, asset finance, derivative products, project finance, financial regulatory, insolvency & re-structuring and structured finance. In addition to advising the private sector, we frequently advise regulatory authorities and government agencies.",
      "Our client comprises of a vast range of corporate, commercial & SME. The firm specializes in advising on banking and financial laws and regulations; Foreign Exchange Regulations; structuring and documentation relating to banking and finance transactions and products.",

      //   Islamic Finance
      "Islamic Finance:",
      "M.D. Law Associates has the privileged position of being the most experienced firm in Pakistan as far structuring of Islamic / Shariah compliant financing transactions are concerned.",
      "Our firm is highly experienced in Islamic financing transactions including ijara, istisna’a, murabaha, musharaka, diminishing musharaka and sukuk issues backed by underlying Shariah compliant transaction. Our expertise also extends to Sharia compliant acquisition and real estate financing transactions which sometimes also involves merging conventional and Sharia compliant financing modes.",

      //   Litigation: General Commercial
      "Litigation: General Commercial:",
      "M.D. Law Associates has been providing litigation services in Pakistan for over 20 years and is highly reputed for its quality services across a range of contentious matters.",
      "This department, under the supervision of Mr. M.D KHAN, has specialist teams that deal with regulatory investigations, commercial and contractual disputes, property and land disputes, company and shareholder disputes, financial crime, banking and finance litigation, public procurement matters, employment and labour matters and family law disputes.",
      "M.D. Law Associates has the unique selling point of having a large presence at all levels of the judicial hierarchy, from the regulatory tribunals, trial courts, the High Court of Sindh at Karachi in its original jurisdiction, the special courts, and the appellate courts and tribunals including the High Court of Sind, Islamabad High Court and High Cour of AJK. Our team’s advocates experienced in both trial courts and appellate forums.",
      "We have a very competent department catering to the property and conveyancing services to our corporate clients, with experience in sale transactions, acquisition of properties under bankruptcy; setting up of trusts and related services.",
      "M.D. Law Associates has been providing high-quality legal services in Pakistan for over 28 years and specialises in advising domestic and international financial institutions, companies, and state and regulatory bodies on their most complex and challenging legal issues.",
      "Given the evolving legal environment in which it operates, the firm applies a multi-disciplinary approach to analyse and address all aspects of client needs. It is the combination of departmental depth and practice breadth that sets the firm apart from its peers and allows it to provide clients with strategic counsel to meet their commercial needs. The firm’s lawyers have a thorough understanding of the commercial environment in which its clients operate and a substantive insight into their business needs, enabling them to provide practical and meaningful solutions to meet varied client requirements.",
      "The firm has extensive experience in advising on and dealing with all areas of corporate, financial, commercial and civil law and practice, including, but not limited to, projects, infrastructure and energy matters, banking and finance transactions and specifically transactions based on Islamic modes of finance, mergers and acquisitions, IPOs, private equity, privatisations, company formation and corporate matters, property matters, labour and industrial relations matter, as well as all types of civil litigation before all legal forums in Pakistan.",
      "The firm’s extensive client base includes international and domestic financial institutions, banks, leasing companies, investment finance companies, modarabas, corporate stock brokerage houses, multinational companies and various other commercial and industrial concerns.",
    ],
  },
  {
    heading: "Taxation Practice",
    logoUrl: "/assets/textPage/tax.svg",
    description: [
      "The Case Lawyer has a market leading tax practice with its “out of the box” solution providing ability has created a niche for itself. The Tax practice offers comprehensive qualitative services across both indirect and direct taxes covering the entire spectrum of transactional, advisory and litigation work. Our distinctive tax practice seamlessly integrates expertise in both advisory services and litigation, enabling the firm to address and offer redressal in any and all disputes that may arise.",
      "Our tax team comprising of professionals with diverse expertise, which include not only legal practitioners but also financial analysts and chartered accountants who hold multijurisdictional qualifications, has achieved this kind of reach and impact with a rather innovative and customised approach.",
      "The size of our tax practice provides us with an ability to specialise, which distinguishes us from the tax services of other law firms. This ability to specialise has become more important in recent years with national tax initiatives having a fundamental impact on both our current and future tax laws, increasing the complexity and range of issues that our tax advice has to cover.",
      "Our core tax services include the following:",
      "Tax Compliance Service: We provide a whole range of tax compliance services aimed at ensuring that our clients remain on the right side of law by fulfilling their obligations timely and accurately under all applicable tax laws of Pakistan.",

      //   Advisory services
      "Advisory Services:",
      "Taxation affects us all. Notwithstanding the popular appeal of tax simplification, there is nothing simple about tax regime in Pakistan and around the world. We provide clear and creative tax advice to clients for their transactions and tax controversies, and with respect to tax legislation and administration.",

      //   Tax Litigation Services
      "Tax Litigation Services:",
      "Through tax litigation, we endeavour to preserve, protect, and defend your constitutional and legal rights which the Constitution, federal and provincial laws of Pakistan guarantee. We strive not only to expedite this arduous process but also make it effective and result oriented.",

      // Retainership Service
      "Retainership Service:",
      "For the services in advisory and day-to-day priority consultancy including the time, skill and experience of our tax practitioners spent in emergent or routine meetings with the Directors or officers of the client company, the law firm shall charge retainership fee on monthly basis or as per arrangement with clients.",
    ],
  },
];

const Sectors = () => {
    return (
      <div className="min-h-screen bg-[#f4ffff] py-12 px-6 md:px-14">
        <div>
        <AnimatedText
       text="Sectors"
        textStyles="h2 mb-[30px] text-center"
         />
        </div>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[90%] md:max-w-[75%] mx-auto mb-10 bg-white border border-accent/80 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-full bg-[#f4ffff] rounded-[8px]">
              <div className="flex flex-col">
                {/* Header Section */}
                <div className="min-h-[68px] bg-white flex flex-col justify-center items-center px-6 rounded-tl-[8px] rounded-tr-[8px]">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/journey/shape.svg"
                      width={20}
                      height={20}
                      alt=""
                      className="object-contain"
                    />
                    <h3 className="text-lg font-semibold text-primary">
                      {section.heading}
                    </h3>
                  </div>
                </div>
  
                {/* Content Section */}
                <div className="flex items-center justify-center py-6 px-6 md:px-10">
                  <div className="flex flex-col items-center gap-6 text-center w-full">
                    {/* Render the logo for each section */}
                    <div className="relative w-[250px] h-[38px]">
                      <Image
                        src={section.logoUrl}
                        fill
                        alt=""
                        className="object-contain"
                      />
                    </div>
  
                    <div className="w-full max-h-[400px] overflow-y-auto px-4 py-2 text-base leading-7">
                      {section.description.map((paragraph, i) => (
                        <motion.p
                          key={i}
                          className={`mb-4 ${
                            [
                              "Financial Services:",
                              "Insurance:",
                              "Banking & Finance:",
                              "Islamic Finance:",
                              "Litigation: General Commercial:",
                              "Advisory Services:",
                              "Tax Litigation Services:",
                              "Retainership Service:",
                            ].includes(paragraph)
                              ? "text-lg mb-2 underline underline-offset-8 font-extrabold"
                              : ""
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.3 + i * 0.2,
                          }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default Sectors;