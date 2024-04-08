document.addEventListener('DOMContentLoaded', function() {
    const references = [
        "Aonerank. (2019). Benefits of e commerce for customers, digital marketing learning. Available: https://www.aonerank.com/digital-marketing-learning/benefits-ecommerce-customers/",
        "Bawack RE, Wamba SF, Carillo KDA, Akter S. Artificial intelligence in E-Commerce: a bibliometric study and literature review. Electron Mark. 2022;32(1):297-338. doi: 10.1007/s12525-022-00537-z. Epub 2022 Mar 18. PMID: 35600916; PMCID: PMC8932684.",
        "Beil, M., Proft, I., van Heerden, D., Sviri, S., & van Heerden, P. V. (2019). Ethical considerations about artificial intelligence for prognostication in intensive care. Intensive Care Medicine Experimental, 7(1). https://doi.org/10.1186/s40635-019-0286-6",
        "Borana, J. (2016). Applications of Artificial Intelligence & Associated Technologies. Emerging Technologies in Engineering, Biomedical, Management and Science, 1–2. https://test.globalinfocloud.com/technodigisoftnew/wp-content/uploads/2019/07/Applications-of-Artificial-Intelligence-Associated-Technologies.pdf",
        "Chawla, N., & Kumar, B. (2021). E-Commerce and Consumer Protection in India: The Emerging Trend. Journal of Business Ethics, 180(2), 581–604. https://doi.org/10.1007/S10551-021-04884-3/FIGURES/7",
        "Claros (2024). ' The Impact of Generative AI on Ecommerce', LinkedIn Pulse, 8 January",
        "Dados, N., & Connel, R. (2012). The Global South. The Ashgate Research Companion to Critical Geopolotics, 11(1). https://doi.org/10.1177/1536504212436479/ASSET/IMAGES/LARGE/10.1177_1536504212436479-FIG1.JPEG",
        "Diro, A., Chilamkurti, N., Nguyen, V., & Heyne, W.(2021). A comprehensive study of anomaly detection schemes in IoT Networks using Machine Learning Algorithms. Wireless sensing and networking for Internet of Things, 21(24), 8320. https://doi.org/10.3390/s21248320",
        "Ebuka, A. A., Emmanuel, D., & Idigo, P. (2023). Artificial Intelligence as a catalyst for the Sustainability of Small and Medium Scale Businesses (SMEs) in Nigeria. Annals of Management and Organization Research, 5(1), 1–11. https://doi.org/10.35912/amor.v5i1.1719",
        "El Youbi, R., Messaoudi, F., & Loukili, M. (2023). Machine Learning-driven Dynamic Pricing Strategies in E-Commerce. In 2023 14th International Conference on Information and Communication Systems (ICICS). 2023 14th International Conference on Information and Communication Systems (ICICS). IEEE. https://doi.org/10.1109/icics60529.2023.10330541",
        "Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations. Minds and Machines, 28(4), 689–707. https://doi.org/10.1007/s11023-018-9482-5",
        "Fatima, S (2023). AI Implementation in an E-commerce. In International Journal For Multidisciplinary Research (Vol. 5, Issue 6). International Journal for Multidisciplinary Research (IJFMR). https://doi.org/10.36948/ijfmr.2023.v05i06.8605",
        "Floridi, L., Cowls, J., Beltrametti, M., Chatila, R., Chazerand, P., Dignum, V., Luetge, C., Madelin, R., Pagallo, U., Rossi, F., Schafer, B., Valcke, P., & Vayena, E. (2018). AI4People—An",
        "Fosso Wamba, S., Queiroz, M. M., Guthrie, C., & Braganza, A. (2022). Industry experiences of artificial intelligence (AI): Benefits and challenges in operations and supply chain management. Production planning & control, 33(16), 1493-1497.",
        "Gurau, M. I. (2021). The Impact of Social Media in the Digitization Process. 9. http://www.mihaelagurau.ro ",
        
        "Héder, M. (2020). A criticism of AI ethics guidelines. Információs Társadalom, 20(4), 57. https://doi.org/10.22503/inftars.xx.2020.4.5",
        "Helo, P., & Hao, Y. (2021). Production Planning & Control The Management of Operations ISSN: (Print) (Online) Journal homepage: https://www.tandfonline.com/loi/tppc20 Artificial intelligence in operations management and supply chain management: an exploratory case study Artificial intelligence in operations management and supply chain management: an exploratory case study.",
        "Hussein, L. A., Kiumarsi, S., Baharudin, A. S., & Hilmi, M. F. (2020). Factors Influencing the Intention to Continue using B2B e-Commerce in Manufacturing SMEs. Engineering, Technology & Applied Science Research, 10(2), 5528–5533. https://doi.org/10.48084/ETASR.3373",
        "Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. Nature Machine Intelligence, 1(9), 389–399. https://www.nature.com/articles/s42256-019-0088-2",
        "Kaas, Porter, Z., Lim, E., Higham, A., Khavandi, S., & Ibrahim Habli. (2023). Ethics in conversation. White Rose Research Online (University of Leeds). https://doi.org/10.1145/3597512.3599713",
        "Khan, A. A., Badshah, S., Liang, P., Waseem, M., Khan, B., Ahmad, A., Fahmideh, M., Niazi, M., & Akbar, M. A. (2022). Ethics of AI: A Systematic Literature Review of Principles and Challenges. The International Conference on Evaluation and Assessment in Software Engineering 2022. https://doi.org/10.1145/3530019.3531329",
        "Koe, W. L., & Afiqah Sakir, N. (2020). The Motivation to Adopt E-commerce Among Malaysian Entrepreneurs. Organizations and Markets in Emerging Economies, 11(1), 189–202. https://doi.org/10.15388/omee.2020.11.30",
        "Krijger, J. (2021). Enter the metrics: critical theory and organizational operationalization of AI ethics. AI & SOCIETY. https://doi.org/10.1007/s00146-021-01256-3",
        "Möllmann, N. R., Mirbabaie, M., & Stieglitz, S. (2021). Is it alright to use artificial intelligence in digital health? A systematic literature review on ethical considerations. Health Informatics Journal, 27(4), 146045822110523. https://doi.org/10.1177/14604582211052391",
        "Myovella, G., Karacuka, M., & Haucap, J. (2020b). Digitalization and economic growth: A comparative analysis of Sub-Saharan Africa and OECD economies. Telecommunications Policy, 44(2), 101856. https://doi.org/10.1016/J.TELPOL.2019.101856",
        "Pournader, M., Ghaderi, H., Hassanzadegan, A., & Fahimnia, B. (2021). Artificial intelligence applications in supply chain management. International Journal of Production",
        "Petersen, T. S. (2021). Ethical guidelines for the use of artificial intelligence and the challenges from value conflicts. Etikk I Praksis - Nordic Journal of Applied Ethics. https://doi.org/10.5324/eip.v15i1.3756",
        "Rodrigues, R. (2020). Legal and Human Rights Issues of AI: Gaps, Challenges and Vulnerabilities. Journal of Responsible Technology, 4(100005), 100005. sciencedirect. https://doi.org/10.1016/j.jrt.2020.100005",
        "Shaikh, N. (2023). GENERATIVE AI USE CASES FOR E-COMMERCE. International Journal of Computer Science and Mobile Computing. https://doi.org/10.47760/ijcsmc.2023.v12i09.002.",
        "Siau, K., & Wang, W. (2020, April 1). Artificial Intelligence (AI) Ethics: Ethics of AI and Ethical AI. Journal of Database Management (JDM). https://www.igi-global.com/article/artificial-intelligence-ai-ethics/249172",
        "Sila, & Ismail. (2019). Antecedents of Electronic Commerce in Developing Economies. Https://Services.Igi-Global.Com/Resolvedoi/Resolve.Aspx?Doi=10.4018/JGIM.2019010104, 27(1), 66–92. https://doi.org/10.4018/JGIM.2019010104",
        "Song, X., Yang, S., Huang, Z., & Huang, T. (2019). The Application of Artificial Intelligence in Electronic Commerce. Journal of Physics: Conference Series, 1302(3), 032030. https://doi.org/10.1088/1742-6596/1302/3/032030",
        "Soni, V. (2020). Emerging Roles of Artificial Intelligence in ecommerce. Published in International Journal of Trend in Scientific Research and Development, 4(5), 223–225. https://www.ijtsrd.com/papers/ijtsrd31768.pdf",
        "Stahl, B. C. (2021). Artificial Intelligence for a Better Future : An Ecosystem Perspective on the Ethics of AI and Emerging Digital Technologies. In library.oapen.org. Springer Nature. https://library.oapen.org/handle/20.500.12657/48228",
        "Statista. (2023). Global: e-commerce retail sales CAGR 2024-2028. https://www.statista.com/forecasts/220177/b2c-e-commerce-sales-cagr-forecast-for-selected-countries",
        "Sugeng, A. S. P. ., & Chusjairi, J. A. . (2022). Digital Marketing Through Instagram Ads: A Case Study of “Instaboost Life” Instagram. International Journal of Entrepreneurship, Business and Creative Economy, 2(2), 47–56. https://doi.org/10.31098/ijebce.v2i2.941",
        "Taher, G. (2021). E-Commerce: Advantages and Limitations. International Journal of Academic Research in Accounting, Finance and Management Sciences, 11(1). https://doi.org/10.6007/IJARAFMS/V11-I1/8987",
        "Waelen, R. (2022). Why AI Ethics Is a Critical Theory. Philosophy & Technology, 35(1). https://doi.org/10.1007/s13347-022-00507-5",
        "Whittlestone, J., & Clarke, S. (2022). AI Challenges for Society and Ethics. The Oxford Handbook of AI Governance. https://doi.org/10.1093/oxfordhb/9780197579329.013.3",
        "Wolfgang, E. (2018). Introduction to Artificial Intelligence (2nd ed.). Springer. https://books.google.co.za/books?hl=en&lr=&id=geFHDwAAQBAJ&oi=fnd&pg=PR5&dq=+AI+OR+artificial+intelligence+AND+intro*&ots=3G2y6djH1v&sig=KfsqlrL6F-RPBWijTy0UudPH_UY&redir_esc=y#v=onepage&q&f=false"
    ];
    

    const referencesList = document.getElementById('referencesList');

    references.forEach(function(reference) {
        const li = document.createElement('li');
        li.textContent = reference;
        referencesList.appendChild(li);
    });
});
