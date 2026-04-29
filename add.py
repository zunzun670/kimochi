import streamlit as st

st.set_page_config(page_title="Emotion Check", layout="centered")

st.title("今の気持ちチェック")

# セッション状態初期化
if "state" not in st.session_state:
    st.session_state.state = None

# 感情ボタン
st.subheader("今どんな感じ？（複数OK）")

col1, col2 = st.columns(2)

with col1:
    if st.button("不安"):
        st.session_state.state = "不安"
    if st.button("寂しい"):
        st.session_state.state = "寂しい"
    if st.button("イライラ"):
        st.session_state.state = "イライラ"

with col2:
    if st.button("もやもや"):
        st.session_state.state = "もやもや"
    if st.button("疲れた"):
        st.session_state.state = "疲れた"
    if st.button("なんとなく不安"):
        st.session_state.state = "なんとなく不安"

st.divider()

# 状態表示
if st.session_state.state:
    st.subheader("今の状態")
    st.markdown(f"### {st.session_state.state}")

    st.info("これは“今の反応”。結論じゃない。")

    # リセット
    if st.button("リセット"):
        st.session_state.state = None

else:
    st.write("まだ選択なし")
