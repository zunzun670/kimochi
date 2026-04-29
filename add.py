import streamlit as st

st.set_page_config(page_title="Emotion Check", layout="centered")

# タイトル（小さく）
st.markdown(
    "<h3 style='text-align:center; font-weight:400;'>今の気持ちチェック</h3>",
    unsafe_allow_html=True
)

# 状態管理（複数選択対応）
if "states" not in st.session_state:
    st.session_state.states = set()

# トグル関数
def toggle(emotion):
    if emotion in st.session_state.states:
        st.session_state.states.remove(emotion)
    else:
        st.session_state.states.add(emotion)

st.subheader("今どんな感じ？（複数OK）")

col1, col2 = st.columns(2)

def render_button(label, col):
    with col:
        selected = label in st.session_state.states
        style = (
            "background-color:#4CAF50; color:white;"
            if selected
            else ""
        )

        if st.button(label, key=label):
            toggle(label)

        # 擬似的に色を反映（再描画で状態反映）
        if selected:
            st.markdown(
                f"""
                <style>
                button[kind="secondary"] {{
                    background-color: #4CAF50 !important;
                    color: white !important;
                }}
                </style>
                """,
                unsafe_allow_html=True
            )

# ボタン群
with col1:
    render_button("不安", col1)
    render_button("寂しい", col1)
    render_button("イライラ", col1)

with col2:
    render_button("もやもや", col2)
    render_button("疲れた", col2)
    render_button("なんとなく不安", col2)

st.divider()

# 表示
if st.session_state.states:
    st.subheader("今の状態")
    st.write(" / ".join(st.session_state.states))

    st.info("これは今の反応。結論ではない。")

    if st.button("リセット"):
        st.session_state.states = set()
else:
    st.write("まだ選択なし")
